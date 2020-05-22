$(document).ready(function window_onload() {
    var wfdashboard = new wfdashboardClass();
    wfdashboard.pageinit();
});

function wfdashboardClass() {
    this.pageinit = function () {
        API.SetApiUrl(localStorage.apiUrl);
        API.SetAccessKey(localStorage.accessKey);

        var m_Resource = '/api/v2/servicerequestssummary?username=frno&orderby=-assignedto'
        API.GET(m_Resource,
            function (p_Json) {
                var m_Event = jQuery.Event("servicerequestsummaryGET");    
                m_Event.Json = p_Json;
                $(document).trigger(m_Event); 
                $('#servicerequestssummary').html('');
                var m_Servicerequestssummary = $.parseJSON(p_Json);
                $(m_Servicerequestssummary).each(function (p_Index) {
                    var m_AmountDescription = m_Servicerequestssummary[p_Index].AmountDescription;
                    if (m_AmountDescription == '') {
                        $('#servicerequestssummary').append(
                            $('<div></div>').append(
                                $('<a></a>')
                                    .addClass('ui-btn')
                                    .html(m_Servicerequestssummary[p_Index].AssignedTo + ':' + m_Servicerequestssummary[p_Index].Amount)
                                    .prop('href', '#')
                                    .on('click', function () {
                                        event.preventDefault();
                                        localStorage.AssignedTo = m_Servicerequestssummary[p_Index].AssignedTo;
                                        localStorage.Signature = m_Servicerequestssummary[p_Index].Signature;
                                        localStorage.AmountDescription = m_Servicerequestssummary[p_Index].AmountDescription;
                                        localStorage.Skip = 0;
                                        window.location="Servicerequests.aspx";
                                    })
                            )
                        );
                    }
                });


            });
        var m_Resource = '/api/v2/workorderssummary?username=frno&orderby=-assignedto';
        API.GET(m_Resource,
            function (p_Json) {
                var m_Event = jQuery.Event("workordersummaryGET");
                m_Event.Json = p_Json;
                $(document).trigger(m_Event); 

                $('#workorderssummary').html('');
                var m_Workorderssummary = $.parseJSON(p_Json);
                $(m_Workorderssummary).each(function (p_Index) {
                    var m_AmountDescription = m_Workorderssummary[p_Index].AmountDescription;
                    if (m_AmountDescription == '') {
                        $('#workorderssummary').append(
                            $('<div></div>').append(
                                $('<a></a>')
                                .addClass('ui-btn')
                                .html(m_Workorderssummary[p_Index].AssignedTo + ':' + m_Workorderssummary[p_Index].Amount)
                                .prop('href', '#')
                                .on('click', function () {
                                    event.preventDefault();
                                    localStorage.AssignedTo = m_Workorderssummary[p_Index].AssignedTo;
                                    localStorage.Signature = m_Workorderssummary[p_Index].Signature;
                                    localStorage.AmountDescription = m_Workorderssummary[p_Index].AmountDescription;
                                    localStorage.Skip = 0;
                                    window.location="Workorders.aspx";
                                })
                            )
                        );
                    }
                });
            });
        var m_Resource = '/api/v2/equipmentssummary?username=frno&orderby=-assignedto';
        API.GET(m_Resource,
            function (p_Json) {
                $('#equipmentssummary').html('');
                var m_Equipmentssummary = $.parseJSON(p_Json);
                $(m_Equipmentssummary).each(function (p_Index) {
                    var m_AmountDescription = m_Equipmentssummary[p_Index].AmountDescription;
                    if (m_AmountDescription == '') {
                        $('#equipmentssummary').append(
                            $('<div></div>').append(
                                $('<a></a>')
                                .addClass('ui-btn')
                                .html(m_Equipmentssummary[p_Index].AssignedTo + ':' + m_Equipmentssummary[p_Index].Amount)
                                .prop('href', '#')
                                .on('click', function () {
                                    event.preventDefault();
                                    localStorage.AssignedTo = m_Equipmentssummary[p_Index].AssignedTo;
                                    localStorage.Signature = m_Equipmentssummary[p_Index].Signature;
                                    localStorage.Skip = 0;
                                    window.location="Equipments.aspx";
                                })
                            )
                        );
                    }
                });
                $('#equipmentssummary').trigger('create');
            });
        var m_Resource = '/api/v2/preventivemaintenancessummary?username=frno&orderby=-assignedto';
        API.GET(m_Resource,
            function (p_Json) {
                $('#preventivemaintenancessummary').html('');
                var m_Preventivemaintenancessummary = $.parseJSON(p_Json);
                $(m_Preventivemaintenancessummary).each(function (p_Index) {
                    var m_AmountDescription = m_Preventivemaintenancessummary[p_Index].AmountDescription;
                    if (m_AmountDescription != '') {
                        $('#preventivemaintenancessummary').append(
                            $('<div></div>').append(
                                $('<a></a>')
                                .addClass('ui-btn')
                                .html(m_Preventivemaintenancessummary[p_Index].AssignedTo + ':' + m_AmountDescription + ':' + m_Preventivemaintenancessummary[p_Index].Amount)
                                .prop('href', '#')
                                .on('click', function () {
                                    event.preventDefault();
                                    localStorage.AssignedTo = m_Preventivemaintenancessummary[p_Index].AssignedTo;
                                    localStorage.Signature = m_Preventivemaintenancessummary[p_Index].Signature;
                                    localStorage.Skip = 0;
                                    window.location="Preventivemaintenances.aspx";
                                })
                            )
                        );
                    }
                });
                $('#preventivemaintenancessummary').trigger('create');
            });
    }
}
