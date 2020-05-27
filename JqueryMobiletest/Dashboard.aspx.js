$(document).ready(function window_onload() {
    var wfdashboard = new wfdashboardClass();
    wfdashboard.pageinit();
});

function wfdashboardClass() {
    this.pageinit = function () {
        var m_Resource = '/api/v2/servicerequestssummary?username=' + localStorage.userName + '&orderby=-assignedto';
            API.GET(m_Resource,
            function (p_Json) {
                var m_Event = jQuery.Event("servicerequestsummaryGET");    
                m_Event.Json = p_Json;
                $(document).trigger(m_Event); 
                var m_Servicerequestssummary = $.parseJSON(p_Json);
                var m_Div = $('<div></div>')
                    .attr("id", "servicerequestssummary")
                    .attr("data-role", "controlgroup")
                    .attr("data-type", "horizontal");
                $(m_Servicerequestssummary).each(function (p_Index) {
                    var m_AmountDescription = m_Servicerequestssummary[p_Index].AmountDescription;
                    if (m_AmountDescription == '') {
                        m_Div.append(
                            $('<a></a>')
                            .addClass('ui-btn')
                            .html(m_Servicerequestssummary[p_Index].AssignedTo + ':' + m_Servicerequestssummary[p_Index].Amount)
                            .prop('href', '#')
                            .on('click', function () {
                                event.preventDefault();
                                localStorage.AssignedTo = m_Servicerequestssummary[p_Index].AssignedTo;
                                localStorage.Skip = 0;
                                window.location = "Servicerequests.aspx";
                            })
                        )
                    }
                });
                $('#servicerequestssummary').replaceWith(m_Div);
                $('div[data-role]').trigger('create');
                });
        var m_Resource = '/api/v2/workorderssummary?username=' + localStorage.userName + '&orderby=-assignedto';
        API.GET(m_Resource,
            function (p_Json) {
                var m_Event = jQuery.Event("workordersummaryGET");
                m_Event.Json = p_Json;
                $(document).trigger(m_Event); 
                var m_Workorderssummary = $.parseJSON(p_Json);
                var m_Div = $('<div></div>')
                    .attr("id", "workorderssummary")
                    .attr("data-role", "controlgroup")
                    .attr("data-type", "horizontal");
                $(m_Workorderssummary).each(function (p_Index) {
                    var m_AmountDescription = m_Workorderssummary[p_Index].AmountDescription;
                    if (m_AmountDescription == '') {
                        m_Div.append(
                            $('<a></a>')
                            .addClass('ui-btn')
                            .html(m_Workorderssummary[p_Index].AssignedTo + ':' + m_Workorderssummary[p_Index].Amount)
                            .prop('href', '#')
                            .on('click', function () {
                                event.preventDefault();
                                localStorage.AssignedTo = m_Workorderssummary[p_Index].AssignedTo;
                                localStorage.Skip = 0;
                                window.location="Workorders.aspx";
                            })
                        )
                    }
                });
                $('#workorderssummary').replaceWith(m_Div);
                $('div[data-role]').trigger('create');
            });
        var m_Resource = '/api/v2/equipmentssummary?username=' + localStorage.userName + '&orderby=-assignedto';
        API.GET(m_Resource,
            function (p_Json) {
                var m_Event = jQuery.Event("equipmentsummaryGET");
                m_Event.Json = p_Json;
                $(document).trigger(m_Event); 
                var m_Equipmentssummary = $.parseJSON(p_Json);
                var m_Div = $('<div></div>')
                    .attr("id", "servicerequestssummary")
                    .attr("data-role", "controlgroup")
                    .attr("data-type", "horizontal");
                $(m_Equipmentssummary).each(function (p_Index) {
                    var m_AmountDescription = m_Equipmentssummary[p_Index].AmountDescription;
                    if (m_AmountDescription == '') {
                        m_Div.append(
                            $('<a></a>')
                            .addClass('ui-btn')
                            .html(m_Equipmentssummary[p_Index].AssignedTo + ':' + m_Equipmentssummary[p_Index].Amount)
                            .prop('href', '#')
                            .on('click', function () {
                                event.preventDefault();
                                localStorage.AssignedTo = m_Equipmentssummary[p_Index].AssignedTo;
                                localStorage.Skip = 0;
                                window.location="Equipments.aspx";
                            })
                        )
                    }
                });
                $('#equipmentssummary').replaceWith(m_Div);
                $('div[data-role]').trigger('create');
            });
        var m_Resource = '/api/v2/preventivemaintenancessummary?username=' + localStorage.userName + '&orderby=-assignedto,-amountdescription';
        API.GET(m_Resource,
            function (p_Json) {
                var m_Event = jQuery.Event("preventivemaintenancesummaryGET");
                m_Event.Json = p_Json;
                $(document).trigger(m_Event); 
                var m_Preventivemaintenancessummary = $.parseJSON(p_Json);
                var m_Div = $('<div></div>')
                    .attr("id", "servicerequestssummary")
                    .attr("data-role", "controlgroup")
                    .attr("data-type", "horizontal");
                var m_AmountDescriptionTemp = '';
                $(m_Preventivemaintenancessummary).each(function (p_Index) {
                    var m_Amount = m_Preventivemaintenancessummary[p_Index].Amount;
                    var m_AmountDescription = m_Preventivemaintenancessummary[p_Index].AmountDescription;
                    if (m_AmountDescription == 'yellow') {
                        m_AmountDescriptionTemp += "<span class='yellowtext'>&nbsp;" + m_Amount + "&nbsp;</span>";
                    } else if (m_AmountDescription == 'red') {
                        m_AmountDescriptionTemp += "<span class='redtext'>&nbsp;" + m_Amount + "&nbsp;</span>";
                    } else if (m_AmountDescription == 'green') {
                        m_AmountDescriptionTemp += "<span class='greentext'>&nbsp;" + m_Amount + "&nbsp;</span>";
                    } else {
                        m_Div.append(
                            $('<a></a>')
                                .addClass('ui-btn')
                                .html(m_Preventivemaintenancessummary[p_Index].AssignedTo + ':' + m_Amount + ' (' + m_AmountDescriptionTemp + ')')
                                .prop('href', '#')
                                .on('click', function () {
                                    event.preventDefault();
                                    localStorage.AssignedTo = m_Preventivemaintenancessummary[p_Index].AssignedTo;
                                    localStorage.Skip = 0;
                                    window.location = "Preventivemaintenances.aspx";
                                })
                        )
                        m_AmountDescriptionTemp = '';
                    }
                });
                $('#preventivemaintenancessummary').replaceWith(m_Div);
                $('div[data-role]').trigger('create');
            });
    }
}
