 $("#submitButton").click(function() {

                    var errorMessage = "";
                    var fieldsMissing = "";

                    if ($("#name").val() == "") {

                        fieldsMissing += "Name";

                    }

                    if (fieldsMissing != "") {

                       errorMessage += "<p>Oops! You are not the correct user.";

                    }


                    if (errorMessage != "") {

                        $("#errorMessage").html(errorMessage);

                    }
if ($("#name").val() == "Zokhanyo") {

                        $("#successMessage").show();
                        $("#errorMessage").hide();
                        $("#linkToNext").show();

                    }else if ($("#name").val() == "zokhanyo") {

                        $("#successMessage").show();
                        $("#errorMessage").hide();
                        $("#linkToNext").show();

                    }else if ($("#name").val() == "zokhanyo ") {

                        $("#successMessage").show();
                        $("#errorMessage").hide();
                        $("#linkToNext").show();

                    }else if ($("#name").val() == "Zokhanyo ") {

                        $("#successMessage").show();
                        $("#errorMessage").hide();
                        $("#linkToNext").show();

                    }else if ($("#name").val() == "ZOKHANYO") {

                        $("#successMessage").show();
                        $("#errorMessage").hide();
                        $("#linkToNext").show();

                    }else if ($("#name").val() == "ZOKHANYO ") {

                        $("#successMessage").show();
                        $("#errorMessage").hide();
                        $("#linkToNext").show();

                    }else if ($("#name").val() == " zokhanyo") {

                        $("#successMessage").show();
                        $("#errorMessage").hide();
                        $("#linkToNext").show();

                    }else if ($("#name").val() == " Zokhanyo") {

                        $("#successMessage").show();
                        $("#errorMessage").hide();
                        $("#linkToNext").show();

                    }else if ($("#name").val() == " ZOKHANYO") {

                        $("#successMessage").show();
                        $("#errorMessage").hide();
                        $("#linkToNext").show();

                    }
                    else {

                        $("#errorMessage").show();
                        $("#successMessage").hide();
                        $("#linkToNext").hide();

                    }

                });
            
            
$(document).on('keypress',function(e) {
                    
                                 var errorMessage = "";
                    var fieldsMissing = "";

                    if ($("#name").val() == "") {

                        fieldsMissing += "Name";

                    }

                    if (fieldsMissing != "") {

                       errorMessage += "<p>Oops! You are not the correct user.";

                    }


                    if (errorMessage != "") {

                        $("#errorMessage").html(errorMessage);

                    }
                    if ($("#name").val() == "Zokhanyo") {

                        $("#successMessage").show();
                        $("#errorMessage").hide();
                        $("#linkToNext").show();

                    }else if ($("#name").val() == "zokhanyo") {

                        $("#successMessage").show();
                        $("#errorMessage").hide();
                        $("#linkToNext").show();

                    }else if ($("#name").val() == "zokhanyo ") {

                        $("#successMessage").show();
                        $("#errorMessage").hide();
                        $("#linkToNext").show();

                    }else if ($("#name").val() == "Zokhanyo ") {

                        $("#successMessage").show();
                        $("#errorMessage").hide();
                        $("#linkToNext").show();

                    }else if ($("#name").val() == "ZOKHANYO") {

                        $("#successMessage").show();
                        $("#errorMessage").hide();
                        $("#linkToNext").show();

                    }else if ($("#name").val() == "ZOKHANYO ") {

                        $("#successMessage").show();
                        $("#errorMessage").hide();
                        $("#linkToNext").show();

                    }else if ($("#name").val() == " zokhanyo") {

                        $("#successMessage").show();
                        $("#errorMessage").hide();
                        $("#linkToNext").show();

                    }else if ($("#name").val() == " Zokhanyo") {

                        $("#successMessage").show();
                        $("#errorMessage").hide();
                        $("#linkToNext").show();

                    }else if ($("#name").val() == " ZOKHANYO") {

                        $("#successMessage").show();
                        $("#errorMessage").hide();
                        $("#linkToNext").show();

                    }
                    else {

                        $("#errorMessage").show();
                        $("#successMessage").hide();
                        $("#linkToNext").hide();

                    }

                });

            