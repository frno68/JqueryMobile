$(document).ready(function window_onload() {
    var wfequipments = new wfequipmentsClass();
    wfequipments.pageinit();
    $(document).on("pagebeforeshow", "#wfequipment", function (event) {
        var wfequipment = new wfequipmentClass();
        wfequipment.pageinit();
    });
});
function wfequipmentsClass() {
    this.pageinit = function () {
        //var CameraSupport = new CameraSupportClass();
        $('#wfequipments [data-icon="arrow-l"]').on('click', function () {
            localStorage.Skip = (parseInt(localStorage.Skip) == 0) ? 0 : parseInt(localStorage.Skip) - 20;
            loadList();
            return false;
        });
        $('#wfequipments [data-icon="arrow-r"]').on('click', function () {
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
            var m_Resource = '/api/v2/equipments' + ((m_QueryString != '') ? '?' + m_QueryString : '');
            API.GET(m_Resource,
                function (p_Json) {
                    var m_Equipments = $.parseJSON(p_Json);
                    new HTMLFactoryClass(m_Equipments).toList(
                        'Id',
                        'Identifier',
                        'Identifier',
                        'Devicetype,Brand,Model,OwnerDescription',
                        function (p_Div) {
                            $('#divEquipments').html('');
                            $(p_Div).attr('id', $('#divEquipments').attr('id'));
                            $('#divEquipments').replaceWith(p_Div);
                            $('#divEquipments a').each(function () {
                                $(this).on('click', function () {
                                    event.preventDefault();
                                    localStorage.Id = $(this).attr('data-id');
                                    $.mobile.navigate("#wfequipment");
                                })
                            });
                            $('#divEquipments').trigger('create');
                        });
                });
        }
    }
}
function wfequipmentClass() {
    this.pageinit = function () {
        var m_QueryString = '';
        if (localStorage.Id != 'undefined') {
            m_QueryString += '/' + localStorage.Id;
        }
        var m_Resource = '/api/v2/equipments' + m_QueryString;
        API.GET(m_Resource,
            function (p_Json) {
                var m_Equipments = $.parseJSON(p_Json);
                new HTMLFactoryClass(m_Equipments[0]).toControlGroup(
                    function (p_Div) {
                        $('#divEquipment').html('');
                        $('#divEquipment').append(p_Div);
                        $('#divEquipment').trigger('create');
                    });
            });
    }
}
