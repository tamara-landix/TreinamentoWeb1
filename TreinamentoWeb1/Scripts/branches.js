$('#parent_branch').select2({
    width: '100%',
    ajax: {
        delay: 250,
        url: RESOURCELINKS.BRANCHES,
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        data: function(params)
        {
            const query = {
                limit: 10,
                term: param.term,
                offset: ((params.page - 1) * 10) || 0
            }
            return query
        }
    }
});