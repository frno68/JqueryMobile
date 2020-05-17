$(document).ready(function window_onload() {
    var wfpreventivemaintenances = new wfpreventivemaintenancesClass();
    wfpreventivemaintenances.pageinit();
    $(document).on("pagebeforeshow", "#wfpreventivemaintenance", function (event) {
        var wfpreventivemaintenance = new wfpreventivemaintenanceClass();
        wfpreventivemaintenance.pageinit();
    });
});
function wfpreventivemaintenancesClass() {
    this.pageinit = function () {
        $('#wfpreventivemaintenances [data-icon="arrow-l"]').on('click', function () {
            localStorage.Skip = (parseInt(localStorage.Skip) == 0) ? 0 : parseInt(localStorage.Skip) - 20;
            loadList();
            return false;
        });
        $('#wfpreventivemaintenances [data-icon="arrow-r"]').on('click', function () {
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
            var m_Resource = '/api/v2/preventivemaintenances' + ((m_QueryString != '') ? '?' + m_QueryString : '');
            API.GET(m_Resource,
                function (p_Json) {
                    var m_Preventivemaintenances = $.parseJSON(p_Json);

                    new HTMLFactoryClass(m_Preventivemaintenances).toList(
                        'Id',
                        'EquipmentIdentifier',
                        'Nextdate,Description',
                        function (p_Div) {
                            $('#divPreventivemaintenances').html('');
                            $(p_Div).attr('id', $('#divPreventivemaintenances').attr('id'));
                            $('#divPreventivemaintenances').replaceWith(p_Div);
                            $('#divPreventivemaintenances a').each(function () {
                                $(this).on('click', function () {
                                    event.preventDefault();
                                    localStorage.Id = $(this).attr('data-id');
                                    $.mobile.navigate("#wfpreventivemaintenance");
                                })
                            });
                            $('#divPreventivemaintenances').trigger('create');
                        },'Id','Description');
                });
        }
    }
}
function wfpreventivemaintenanceClass() {
    this.pageinit = function () {
        var _Preventivemaintenance;
        function Get() {
            var m_QueryString = '';
            if (localStorage.Id != 'undefined') {
                m_QueryString += '/' + localStorage.Id;
            }
            var m_Resource = '/api/v2/preventivemaintenances' + m_QueryString;
            API.GET(m_Resource,
                function (p_Json) {
                    var m_Preventivemaintenances = $.parseJSON(p_Json);
                    _Preventivemaintenances = m_Preventivemaintenances[0];
                    new HTMLFactoryClass(_Preventivemaintenances).toControlGroup(
                        function (p_Div) {
                            $('#divPreventivemaintenance').html('');
                            $('#divPreventivemaintenance').append(p_Div)
                            $('#divPreventivemaintenance').trigger('create');
                        });
                });
        }
        $('a[data-icon="check"]').on('click', function () {
            jQuery.each(_Preventivemaintenance, function (field, value) {
                _Preventivemaintenance[field] = $('input[id=' + field + ']').val();
            });
            var m_Resource = '/api/v2/preventivemaintenances';
            API.PUT(m_Resource, JSON.stringify(_Preventivemaintenance),
                function () {
                    Get();
                });

        });
        Get(); 
    }
}
