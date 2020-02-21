<!--NAVGOCO - INITIALZE SCRIPT -->
    <script>
        $(document).ready(function() {
            // Initialize navgoco with default options
            $("#navsmigoco").navgoco({
                caretHtml: '',
                accordion: true,
                openClass: 'nav-active', // open
                save: true, // leave false or nav highlighting doesn't work right
                cookie: {
                    name: 'navgoco',
                    expires: false,
                    path: '/'
                },
                slide: {
                    duration: 400,
                    easing: 'swing'
                }
            });
            $("#collapseAll").click(function(e) {
                e.preventDefault();
                $("#navsmigoco").navgoco('toggle', false);
            });
            $("#expandAll").click(function(e) {
                e.preventDefault();
                $("#navsmigoco").navgoco('toggle', true);
            });
        });
    </script>
