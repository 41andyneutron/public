$(document).ready(function() {
const myModal = new bootstrap.Modal('#myModals');
const modal_del = new bootstrap.Modal('#modal_hapus');
const modal_upload = new bootstrap.Modal('#modal_upload');
    $(document).on("click", ".modal_show", function(e) {
        $("#modal_body").html('');
        $("#modal_hapus_body").html('');
        $("#modal_upload_body").html('');
        // // $("#loading_ajax_modal").show();
        var serial = "";
        $.each(this.attributes, function() {
            if (this.specified) {
                serial += '&' + this.name + "=" + this.value;
            }
        });
        var vm = $(this).attr("vm");
        var title = $(this).attr("title");
        
        
        if (title != null) {
            $("#exampleModalLabel").html(title);
        } else {
            $("#exampleModalLabel").html("Hello Neu");
        }
        base_url = $("#base_url").val();
        
            url = base_url + "root_n/modal";
        
        $.post(url, serial, function(data) {
            // $("#loading_ajax_modal").hide();
            $("#modal_body").html(data);
        });
        myModal.show();
    });
    
    $(document).on("click", ".hapus_data", function(e) {
        $("#modal_body").html('');
        $("#modal_hapus_body").html('');
        $("#modal_upload_body").html('');
    //     $("#loading_ajax_modal").show();
        var serial = "";
        $.each(this.attributes, function() {
            if (this.specified) {
                serial += "&" + this.name + "=" + this.value;
            }
        });
        base_url = $("#base_url").val();
        url = base_url + "root_n/modal/hapus";
        $.post(url, serial, function(data) {
            // $("#loading_ajax_modal").hide();
            $("#modal_hapus_body").html(data);
        });
        modal_del.show();
    });

    $(document).on("click", ".hapus_file", function(e) {
        $("#modal_body").html('');
        $("#modal_hapus_body").html('');
        $("#modal_upload_body").html('');
    //     $("#loading_ajax_modal").show();
        var serial = "";
        $.each(this.attributes, function() {
            if (this.specified) {
                serial += "&" + this.name + "=" + this.value;
            }
        });
        base_url = $("#base_url").val();
        url = base_url + "root_n/modal/hapus_file";
        $.post(url, serial, function(data) {
            // $("#loading_ajax_modal").hide();
            $("#modal_hapus_body").html(data);
        });
        modal_del.show();
    });

    $(document).on("click", ".upload_file", function(e) {
        $("#modal_body").html('');
        $("#modal_hapus_body").html('');
        $("#modal_upload_body").html('');
    //     $("#loading_ajax_modal").show();
        var serial = "";
        $.each(this.attributes, function() {
            if (this.specified) {
                serial += "&" + this.name + "=" + this.value;
            }
        });
        
        var title = $(this).attr("title");
        if (title != null) {
            $("#modal_upload_label").html(title);
        } else {
            $("#modal_upload_label").html("Upload File");
        }
        base_url = $("#base_url").val();
        url = base_url + "root_n/modal/upload";
        $.post(url, serial, function(data) {
            // $("#loading_ajax_modal").hide();
            
            $("#modal_upload_body").html(data);
        });
        modal_upload.show();
    });
    // $(document).on("click", ".btn_switch", function(e) {
    //     $("#modal_body").html('');
    //     $("#modal_hapus_body").html('');
    //     $("#loading_ajax_modal").show();
    //     var serial = "";
    //     $.each(this.attributes, function() {
    //         if (this.specified) {
    //             serial += "&" + this.name + "=" + this.value;
    //         }
    //     });
    //     var title = $(this).attr("title");
    //     var f = 'all';
    //     if ($(this).attr("f") != null) {
    //         f = $(this).attr("f");
    //     }
    //     $("#modal_hapus").modal();
    //     base_url = $("#base_url").val();
    //     url = base_url + "modal/switch_";
    //     $.post(url, serial, function(data) {
    //         $("#loading_ajax_modal").hide();
    //         $("#modal_hapus_body").html(data);
    //     });
    //     // alert('modal btn_switch');
    // });

    $(document).on("click", ".modal_show_test", function(e) {
        $("#modal_body").html('');
        $("#modal_hapus_body").html('');
        $("#modal_upload_body").html('');
        // // $("#loading_ajax_modal").show();
        var serial = "";
        $.each(this.attributes, function() {
            if (this.specified) {
                serial += '&' + this.name + "=" + this.value;
            }
        });
        var vm = $(this).attr("vm");
        var title = $(this).attr("title");
        
        
        if (title != null) {
            $("#exampleModalLabel").html(title);
        } else {
            $("#exampleModalLabel").html("Hello Neu");
        }
        base_url = $("#base_url").val();
        
            url = base_url + "root_n/modal";
        
        $.post(url, serial, function(data) {
            // $("#loading_ajax_modal").hide();
            // myModalAlternative.hide();
            $("#modal_body").html(data);
        });
    });
});
