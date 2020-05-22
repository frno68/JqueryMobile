$(document).ready(function window_onload() {
    var wfworkorders = new wfworkordersClass();
    wfworkorders.pageinit();
    $(document).on("pagebeforeshow", "#wfworkorder", function (event) {
        var wfworkorder = new wfworkorderClass();
        wfworkorder.pageinit();
    });
});
function wfworkordersClass() {
    this.pageinit = function () {
        $('#wfworkorders [data-icon="arrow-l"]').on('click', function () {
            localStorage.Skip = (parseInt(localStorage.Skip) == 0) ? 0 : parseInt(localStorage.Skip) - 20;
            loadList();
            return false;
        });
        $('#wfworkorders [data-icon="arrow-r"]').on('click', function () {
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
            var m_Resource = '/api/v2/workorders' + ((m_QueryString != '') ? '?' + m_QueryString : '');
            API.GET(m_Resource,
                function (p_Json) {
                    var m_Workorders = $.parseJSON(p_Json);

                    new HTMLFactoryClass(m_Workorders).toList(
                        'Id',
                        'Identifier',
                        'CustomerDescription',
                        'Faultdescription',
                        function (p_Div) {
                            $('#divWorkorders').html('');
                            $(p_Div).attr('id', $('#divWorkorders').attr('id'));
                            $('#divWorkorders').replaceWith(p_Div);
                            $('#divWorkorders a').each(function () {
                                $(this).on('click', function () {
                                    event.preventDefault();
                                    localStorage.Id = $(this).attr('data-id');
                                    $.mobile.navigate("#wfworkorder");
                                })
                            });
                            $('#divWorkorders').trigger('create');
                        });
                });
        }
    }
}
function wfworkorderClass() {
    this.pageinit = function () {
        var m_QueryString = '';
        if (localStorage.Id != 'undefined') {
            m_QueryString += '/' + localStorage.Id;
        }
        var m_Resource = '/api/v2/workorders' + m_QueryString;
        API.GET(m_Resource,
            function (p_Json) {
                var m_Workorders = $.parseJSON(p_Json);
                new HTMLFactoryClass(m_Workorders[0]).toControlGroup(
                    function (p_Div) {
                        $('#divWorkorder').html('');
                        $('#divWorkorder').append(p_Div);
                        $('#divWorkorder').trigger('create');
                    });

            });
    }
}
