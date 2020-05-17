$(document).ready(function window_onload() {
    var wfservicerequests = new wfservicerequestsClass();
    wfservicerequests.pageinit();
    $(document).on("pagebeforeshow", "#wfservicerequest", function (event) {
        var wfservicerequest = new wfservicerequestClass();
        wfservicerequest.pageinit();
    });
});
function wfservicerequestsClass() {
    this.pageinit = function () {
        $('#wfservicerequests [data-icon="arrow-l"]').on('click', function () {
            localStorage.Skip = (parseInt(localStorage.Skip) == 0) ? 0 : parseInt(localStorage.Skip) - 20;
            loadList();
            return false;
        });
        $('#wfservicerequests [data-icon="arrow-r"]').on('click', function () {
            localStorage.Skip = parseInt(localStorage.Skip) + 20;
            loadList();
            return false;
        });
        loadList();
        function loadList() {
            var m_QueryString = '';
            if (localStorage.AssignedTo != 'undefined') {
                m_QueryString += (m_QueryString != '') ? '&' : '';
                m_QueryString += 'assignedto=' + localStorage.AssignedTo;
            }
            if (localStorage.Skip != 'undefined') {
                m_QueryString += (m_QueryString != '') ? '&' : '';
                m_QueryString += 'skip=' + localStorage.Skip;
            }
            var m_Resource = '/api/v2/servicerequests' + ((m_QueryString != '') ? '?' + m_QueryString : '');
            API.GET(m_Resource,
                function (p_Json) {
                    var m_Servicerequests = $.parseJSON(p_Json);

                    new HTMLFactoryClass(m_Servicerequests).toList(
                        'Id',
                        'Identifier',
                        'Heading',
                        function (p_Div) {
                            $('#divServicerequests').html('');
                            $(p_Div).attr('id', $('#divServicerequests').attr('id'));
                            $('#divServicerequests').replaceWith(p_Div);
                            $('#divServicerequests a').each(function () {
                                $(this).on('click', function () {
                                    event.preventDefault();
                                    localStorage.Id = $(this).attr('data-id');
                                    $.mobile.navigate("#wfservicerequest");
                                })
                            });
                            $('#divServicerequests').trigger('create');
                        });
                });
        }
    }
}
function wfservicerequestClass() {
    this.pageinit = function () {
        var _Servicerequest;
        function Get() {
            var m_QueryString = '';
            if (localStorage.Id != 'undefined') {
                m_QueryString += '/' + localStorage.Id;
            }
            var m_Resource = '/api/v2/servicerequests' + m_QueryString;
            API.GET(m_Resource,
                function (p_Json) {
                    var m_Servicerequests = $.parseJSON(p_Json);
                    _Servicerequest = m_Servicerequests[0];
                    new HTMLFactoryClass(_Servicerequest).toControlGroup(
                        function (p_Div) {
                            $('#divServicerequest').html('');
                            $('#divServicerequest').append(p_Div)
                            $('#divServicerequest').trigger('create');
                        });
                });
        }
        $('a[data-icon="check"]').on('click', function () {
            jQuery.each(_Servicerequest, function (field, value) {
                _Servicerequest[field] = $('input[id=' + field + ']').val();
            });
            var m_Resource = '/api/v2/servicerequests';
            API.PUT(m_Resource, JSON.stringify(_Servicerequest),
                function () {
                    Get();
                });

        });
        Get(); 
    }
}
