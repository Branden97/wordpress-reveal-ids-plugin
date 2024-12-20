jQuery(document).ready(function() {
    jQuery("#authorplugins-start").click(function() {
        jQuery("#authorplugins-wrap").hide();
        jQuery.ajax({ 
            dataType: 'jsonp',
            jsonp: 'jsonp_callback',
            url: window.location.protocol + '//www.schloebe.de/api_portfolio.php?cat=wordpress',
            success: function(j) {
                jQuery.each(j.plugins, function(i, plugin) {
                    // Sanitize/escape the data
                    const sanitizedUrl = encodeURI(plugin.os_script_info_url);
                    const sanitizedTitle = jQuery('<div>').text(plugin.os_script_title).html();
                    const sanitizedVersion = jQuery('<div>').text(plugin.os_script_version).html();

                    jQuery('#authorpluginsul').append(
                        `<li>
                            <a href="${sanitizedUrl}" target="_blank">
                                <span class="post">${sanitizedTitle}</span>
                                <span class="hidden"> - </span>
                                <cite>version ${sanitizedVersion}</cite>
                            </a>
                        </li>`
                    ).css("display", "none").fadeIn("slow");
                });
            }
        });
    });
});
