function HTMLFactoryClass(p_JsonObject) {
    var _JsonObject = p_JsonObject;

    this.toUL = function () {
        var m_Ul = $('<ul></ul>');
        jQuery.each(_JsonObject, function (field, value) {
            m_Ul.append(
                $('<li></li>').html(
                    field + ':' + value
                )
            );
        });
        return m_Ul;
    }

    this.toControlGroup = function (p_Callback) {
        var m_Div = $('<div></div>', {
            'data-role' : 'controlgroup'
        });
        jQuery.each(_JsonObject, function (field, value) {
            //var m_Div2 = $('<div></div>').addClass('ui-field-contain');
            var m_Div2 = $('<div></div>').addClass('FloatingLabel');
            m_Div2.append(
                $('<label />', {
                    'for': field
                }).html(field)
            );
            m_Div2.append(
                $('<input />', {
                    'name' : field
                    , 'id' : field
                    , 'value': value
                    , 'type': 'text'
                })
            );
            m_Div.append(m_Div2);
        });
        (p_Callback != 'undefined') ? p_Callback(m_Div) : function () { return false; }
        return m_Div;
    }

    this.toList = function (
        p_IdField,
        p_Identifier,
        p_Identifier2,
        p_DescriptionFields,    
        p_Callback
    ) {
        var m_Div = $('<div></div>')
        var m_Ul = $('<ul></ul>')
            .attr("data-role", "listview")
            .attr("data-inset","true")
        jQuery.each(_JsonObject, function (p_Index) {
            var m_Li = $('<li></li>')
            var m_Id = _JsonObject[p_Index][p_IdField];
            var m_A = $('<a></a>')
                .addClass('ui-btn')
                .prop('href', '#')
                .attr('data-id', m_Id)
            $('<h2></h2>')
                .html(_JsonObject[p_Index][p_Identifier] + ' - ' + _JsonObject[p_Index][p_Identifier2])
                .appendTo(m_A);
            var m_DescriptionFieldsArray = p_DescriptionFields.split(',');
            jQuery.each(m_DescriptionFieldsArray, function (p_Index2) {
                $('<p></p>')
                    .html(_JsonObject[p_Index][m_DescriptionFieldsArray[p_Index2]])
                    .appendTo(m_A);
            });
            m_Li.append(m_A)
            m_Ul.append(m_Li);
        });
        m_Div.append(m_Ul);
        (p_Callback != 'undefined') ? p_Callback(m_Div) : function () { return false; }
        return m_Div;
    }
}