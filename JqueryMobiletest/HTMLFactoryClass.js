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
        p_DescriptionFields,
        p_Callback
    ) {
        var m_Div = $('<div></div>');
        jQuery.each(_JsonObject, function (p_Index) {
            var m_Id = _JsonObject[p_Index][p_IdField];
            var m_Identifier = _JsonObject[p_Index][p_Identifier];
            var m_DescriptionField = '';
            var m_DescriptionFieldsArray = p_DescriptionFields.split(',');
            jQuery.each(m_DescriptionFieldsArray, function (p_Index2) {
                m_DescriptionField += (m_DescriptionField.length > 0 ? ' ' : '') + _JsonObject[p_Index][m_DescriptionFieldsArray[p_Index2]];
            });
            var m_Html = m_Identifier + (m_DescriptionField.length > 0 ? '<br />' + m_DescriptionField : '');
            $('<a></a>')
                .addClass('ui-btn')
                .html(m_Html)
                .prop('href', '#')
                .attr('data-id', m_Id)
                .appendTo(m_Div);
        });
        (p_Callback != 'undefined') ? p_Callback(m_Div) : function () { return false; }
        return m_Div;
    }
}