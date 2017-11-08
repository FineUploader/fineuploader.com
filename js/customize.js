$(document).ready(function(){
    var BASE_URL = 'https://github.com/FineUploader/fine-uploader/releases',
        version = '5.15.2',

        updateDownloadUrl = function() {
            var base = 'fine-uploader.zip',
                endpoint = '';

            if ($('#ep_all').prop('checked')) {
                $("#jquery_fieldset input[name='jquery']")
                    .prop('disabled', true)
                    .prop('checked', false);
            }

            $("#ep_fieldset").find("input[type='radio']:checked").each(function() {
                if (this.value) {
                    endpoint = this.value + '.';
                }
            });

            $('#build-btn').attr('href', BASE_URL + '/download/' + version + '/' + endpoint + base);
        };


    document.getElementById('build-btn').innerHTML += ' ' + version;
    updateDownloadUrl();
    $('#customize-form').change(updateDownloadUrl);
});
