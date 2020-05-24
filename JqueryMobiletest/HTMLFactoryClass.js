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
            var m_Div2 = $('<div></div>').addClass('FloatingLabel');
            m_Div2.append(
                $('<label />', {
                    'for': field
                }).html(field)
            );
            m_Div2.append(
                $('<textarea />', {
                    'name' : field
                    , 'id' : field
                    , 'text': value
                    , 'rows': '1'
                }).height(function () {
                    return getHeight(this) + 'px';
                }).on("keyup", function (event) {
                    $(this).height(getHeight(this) + 'px');
                })
            );
            m_Div.append(m_Div2);

            function getHeight(p_TextArea) {
                $(p_TextArea).height('1px'); //Has to be set to get a proper scrollheight
                return $(p_TextArea)[0].scrollHeight;
            }

        });
        (p_Callback != 'undefined') ? p_Callback(m_Div) : function () { return false; }
        return m_Div;
    }

    this.toControlGroupHorizontal = function (p_Callback) {
        var m_Div = $('<div></div>', {
            //'data-role': 'controlgroup'
        });
        jQuery.each(_JsonObject, function (p_Index) {
            var m_AmountDescription = _JsonObject[p_Index].AmountDescription;
            if (m_AmountDescription == '') {
                $('<a></a>')
                    .addClass('ui-btn')
                    .html(_JsonObject[p_Index].AssignedTo + ':' + _JsonObject[p_Index].Amount)
                    .prop('href', '#')
                    .appendTo(m_Div);
            }
        });
        (p_Callback != 'undefined') ? p_Callback(m_Div) : function () { return false; }
        return m_Div;
    }

    this.toList = function (
        p_IdField,
        p_UpperLeftFields,
        p_UpperRightFields,
        p_LowerFields,    
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

            var p_UpperRightFieldsArray = p_UpperRightFields.split(",");
            var m_Html = '';
            jQuery.each(p_UpperRightFieldsArray, function (p_Index2) {
                m_Html += (m_Html.length > 0 ? ' - ' : '') + _JsonObject[p_Index][p_UpperRightFieldsArray[p_Index2]];
            });
            $('<p></p>')
                .addClass('ui-li-aside')
                .css({ 'top': '2px'})
                .html(m_Html)
                .appendTo(m_A);

            var m_UpperLeftFieldsArray = p_UpperLeftFields.split(",");
            var m_Html = '';
            jQuery.each(m_UpperLeftFieldsArray, function (p_Index2) {
                m_Html += (m_Html.length > 0 ? ' - ' : '') + _JsonObject[p_Index][m_UpperLeftFieldsArray[p_Index2]];
            });
            $('<h2></h2>')
                .html(m_Html)
                .appendTo(m_A);

            var m_LowerFieldsArray = p_LowerFields.split(',');
            jQuery.each(m_LowerFieldsArray, function (p_Index2) {
                $('<p></p>')
                    .css({'white-space': 'pre-wrap'})
                    .html(_JsonObject[p_Index][m_LowerFieldsArray[p_Index2]])
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