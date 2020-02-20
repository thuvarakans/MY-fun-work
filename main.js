SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
  SC.stream('/tracks/128334697',function(sound){
    $('#start-e1').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-e1').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });

  SC.stream('/tracks/24556266',function(sound){
    $('#start-e2').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-e2').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });

  SC.stream('/tracks/172798789',function(sound){
    $('#start-e3').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-e3').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
  SC.stream('/tracks/47517727',function(sound){
      $('#start-e4').click(function(e) {
             e.preventDefault();
             sound.start();
           });
      $('#stop-e4').click(function(e) {
             e.preventDefault();
             sound.stop();
          });
    });

    $(document).ready(function() {
      SC.stream('/tracks/126998983',function(sound){
        $('#start-e5').click(function(e) {
               e.preventDefault();
               sound.start();
             });
        $('#stop-e5').click(function(e) {
               e.preventDefault();
               sound.stop();
            });
      });

      SC.stream('/tracks/61111941',function(sound){
        $('#start-e6').click(function(e) {
               e.preventDefault();
               sound.start();
             });
        $('#stop-e6').click(function(e) {
               e.preventDefault();
               sound.stop();
            });
      });

      SC.stream('/tracks/36467694',function(sound){
        $('#start-e7').click(function(e) {
               e.preventDefault();
               sound.start();
             });
        $('#stop-e7').click(function(e) {
               e.preventDefault();
               sound.stop();
            });
      });
      SC.stream('/tracks/168618781',function(sound){
          $('#start-e8').click(function(e) {
                 e.preventDefault();
                 sound.start();
               });
          $('#stop-e8').click(function(e) {
                 e.preventDefault();
                 sound.stop();
              });
        });
    SC.stream('/tracks/282382733',function(sound){
        $('#start-m1').click(function(e) {
               e.preventDefault();
               sound.start();
             });
        $('#stop-m1').click(function(e) {
               e.preventDefault();
               sound.stop();
            });
      });
      SC.stream('/tracks/220363576',function(sound){
          $('#start-m2').click(function(e) {
                 e.preventDefault();
                 sound.start();
               });
          $('#stop-m2').click(function(e) {
                 e.preventDefault();
                 sound.stop();
              });
        });
        SC.stream('/tracks/36794200',function(sound){
            $('#start-m3').click(function(e) {
                   e.preventDefault();
                   sound.start();
                 });
            $('#stop-m3').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                });
          });
          SC.stream('/tracks/84093196',function(sound){
              $('#start-m4').click(function(e) {
                     e.preventDefault();
                     sound.start();
                   });
              $('#stop-m4').click(function(e) {
                     e.preventDefault();
                     sound.stop();
                  });
            });
            SC.stream('/tracks/219006043',function(sound){
                $('#start-m5').click(function(e) {
                       e.preventDefault();
                       sound.start();
                     });
                $('#stop-m5').click(function(e) {
                       e.preventDefault();
                       sound.stop();
                    });
              });
              SC.stream('/tracks/151496827',function(sound){
                  $('#start-m6').click(function(e) {
                         e.preventDefault();
                         sound.start();
                       });
                  $('#stop-m6').click(function(e) {
                         e.preventDefault();
                         sound.stop();
                      });
                });
                SC.stream('/tracks/94292445',function(sound){
                    $('#start-m7').click(function(e) {
                           e.preventDefault();
                           sound.start();
                         });
                    $('#stop-m7').click(function(e) {
                           e.preventDefault();
                           sound.stop();
                        });
                  });
                  SC.stream('/tracks/298287566',function(sound){
                      $('#start-m8').click(function(e) {
                             e.preventDefault();
                             sound.start();
                           });
                      $('#stop-m8').click(function(e) {
                             e.preventDefault();
                             sound.stop();
                          });
                    });
            SC.stream('/tracks/308219599',function(sound){
                $('#start-t1').click(function(e) {
                       e.preventDefault();
                       sound.start();
                     });
                $('#stop-t1').click(function(e) {
                       e.preventDefault();
                       sound.stop();
                    });
              });
              SC.stream('/tracks/154754600',function(sound){
                  $('#start-t2').click(function(e) {
                         e.preventDefault();
                         sound.start();
                       });
                  $('#stop-t2').click(function(e) {
                         e.preventDefault();
                         sound.stop();
                      });
                });
                SC.stream('/tracks/132382458',function(sound){
                    $('#start-t3').click(function(e) {
                           e.preventDefault();
                           sound.start();
                         });
                    $('#stop-t3').click(function(e) {
                           e.preventDefault();
                           sound.stop();
                        });
                  });
                  SC.stream('/tracks/65985163',function(sound){
                      $('#start-t4').click(function(e) {
                             e.preventDefault();
                             sound.start();
                           });
                      $('#stop-t4').click(function(e) {
                             e.preventDefault();
                             sound.stop();
                          });
                    });
                    SC.stream('/tracks/192304337',function(sound){
                        $('#start-t5').click(function(e) {
                               e.preventDefault();
                               sound.start();
                             });
                        $('#stop-t5').click(function(e) {
                               e.preventDefault();
                               sound.stop();
                            });
                      });
                      SC.stream('/tracks/378242777',function(sound){
                          $('#start-t6').click(function(e) {
                                 e.preventDefault();
                                 sound.start();
                               });
                          $('#stop-t6').click(function(e) {
                                 e.preventDefault();
                                 sound.stop();
                              });
                        });
                        SC.stream('/tracks/315182574',function(sound){
                            $('#start-t7').click(function(e) {
                                   e.preventDefault();
                                   sound.start();
                                 });
                            $('#stop-t7').click(function(e) {
                                   e.preventDefault();
                                   sound.stop();
                                });
                          });
                          SC.stream('/tracks/378173321',function(sound){
                              $('#start-t8').click(function(e) {
                                     e.preventDefault();
                                     sound.start();
                                   });
                              $('#stop-t8').click(function(e) {
                                     e.preventDefault();
                                     sound.stop();
                                  });
                            });
                    SC.stream('/tracks/236213538',function(sound){
                        $('#start-i1').click(function(e) {
                               e.preventDefault();
                               sound.start();
                             });
                        $('#stop-i1').click(function(e) {
                               e.preventDefault();
                               sound.stop();
                            });
                      });
                      SC.stream('/tracks/314540673',function(sound){
                          $('#start-i2').click(function(e) {
                                 e.preventDefault();
                                 sound.start();
                               });
                          $('#stop-i2').click(function(e) {
                                 e.preventDefault();
                                 sound.stop();
                              });
                        });
                        SC.stream('/tracks/285709295',function(sound){
                            $('#start-i3').click(function(e) {
                                   e.preventDefault();
                                   sound.start();
                                 });
                            $('#stop-i3').click(function(e) {
                                   e.preventDefault();
                                   sound.stop();
                                });
                          });
                          SC.stream('/tracks/605993091',function(sound){
                              $('#start-i4').click(function(e) {
                                     e.preventDefault();
                                     sound.start();
                                   });
                              $('#stop-i4').click(function(e) {
                                     e.preventDefault();
                                     sound.stop();
                                  });
                            });
                            SC.stream('/tracks/405018561',function(sound){
                                $('#start-i5').click(function(e) {
                                       e.preventDefault();
                                       sound.start();
                                     });
                                $('#stop-i5').click(function(e) {
                                       e.preventDefault();
                                       sound.stop();
                                    });
                              });
                              SC.stream('/tracks/290085680',function(sound){
                                  $('#start-i6').click(function(e) {
                                         e.preventDefault();
                                         sound.start();
                                       });
                                  $('#stop-i6').click(function(e) {
                                         e.preventDefault();
                                         sound.stop();
                                      });
                                });
                                SC.stream('/tracks/279473779',function(sound){
                                    $('#start-i7').click(function(e) {
                                           e.preventDefault();
                                           sound.start();
                                         });
                                    $('#stop-i7').click(function(e) {
                                           e.preventDefault();
                                           sound.stop();
                                        });
                                  });
                                  SC.stream('/tracks/70849838',function(sound){
                                      $('#start-i8').click(function(e) {
                                             e.preventDefault();
                                             sound.start();
                                           });
                                      $('#stop-i8').click(function(e) {
                                             e.preventDefault();
                                             sound.stop();
                                          });
                                    });

});

