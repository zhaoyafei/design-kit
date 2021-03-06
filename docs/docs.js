// Initialize Foundation
$(document).foundation();

// Add fake `.ng-empty` classes to empty .minimal-field fields
$(document).ready(function() {
  $(".minimal-field input, .minimal-field select, .minimal-field textarea").focusout(function(){
    if ($(this).val().length > 0){
      $(this).removeClass("ng-empty");
    } else if ($(this).val().length === 0) {
      $(this).addClass("ng-empty");
    }
  });
});

// Pill Groups
$('.price-range .pill.button').on('click', function() { $('.price-range .pill.button').removeClass('active'); $(this).addClass('active');});
$('.ice-cream .pill.button').on('click', function() { $('.ice-cream .pill.button').removeClass('active'); $(this).addClass('active');});

// Initialize Selectize
$('.selectize').selectize(selectizeOptions());

// Initialize Dropzone
Dropzone.autoDiscover = false;
$('#dropzoneExample').dropzone(dropzoneOptions());

// Check hash for loading a particular tab
$(document).ready(checkHash);

////////////////////////////////////////////////////////////////////////////////
// Element Options
////////////////////////////////////////////////////////////////////////////////

// Selectize Options
function selectizeOptions () {
  return {
    options: [
      { label: 'Acrylic', value: 'acrylic' },
      { label: 'Aluminum', value: 'aluminum' },
      { label: 'Brass', value: 'brass' },
      { label: 'Cement', value: 'cement' },
      { label: 'Ceramic', value: 'ceramic' },
      { label: 'Chrome', value: 'chrome' },
      { label: 'Clay', value: 'clay' },
      { label: 'Concrete', value: 'concrete' },
      { label: 'Copper', value: 'copper' },
      { label: 'Epoxy', value: 'epoxy' },
      { label: 'Fabric', value: 'fabric' },
      { label: 'Felt', value: 'felt' },
      { label: 'Fiberglass', value: 'fiberglass' },
      { label: 'Foam', value: 'foam' },
      { label: 'Glass', value: 'glass' },
      { label: 'Gypsum', value: 'gypsum' },
      { label: 'Granite', value: 'granite' },
      { label: 'Iron', value: 'iron' },
      { label: 'Laminate', value: 'laminate' },
      { label: 'Limestone', value: 'limestone' },
      { label: 'Marble', value: 'marble' },
      { label: 'Metal', value: 'metal' },
      { label: 'Nylon', value: 'nylon' },
      { label: 'Plaster', value: 'plaster' },
      { label: 'Plastic', value: 'plastic' },
      { label: 'Polyester', value: 'polyester' },
      { label: 'Porcelain', value: 'porcelain' },
      { label: 'Quartz', value: 'quartz' },
      { label: 'Resin', value: 'resin' },
      { label: 'Rubber', value: 'rubber' },
      { label: 'Slate', value: 'slate' },
      { label: 'Solid Surface', value: 'solid-surface' },
      { label: 'Stainless Steel', value: 'stainless-steel' },
      { label: 'Steel', value: 'steel' },
      { label: 'Stone', value: 'stone' },
      { label: 'Travertine', value: 'travertine' },
      { label: 'Urethane', value: 'urethane' },
      { label: 'Velvet', value: 'velvet' },
      { label: 'Veneer', value: 'veneer' },
      { label: 'Wood', value: 'wood' },
      { label: 'Wood - Natural', value: 'wood-natural' },
      { label: 'Wood - Engineered', value: 'wood-engineered' },
      { label: 'Terrazzo', value: 'terrazzo' },
    ],
    items: ['acrylic', 'brass', 'ceramic'],
    create: true,
    highlight: true,
    labelField: 'label',
    valueField: 'value',
    searchField: ['label', 'value'],
  };
}

// Dropzone Options
function dropzoneOptions() {
  return {
    url: 'file/',
    addRemoveLinks: true,
    dictDefaultMessage: 'Drag attachments here or click to browse',
    clickable: true,
  };
}

function checkHash() {
  if(window.location.hash) {
    $('a[href="'+window.location.hash+'"]').click();
  }
  $('#tabs-navigation li a').click(function() {
    window.location.hash = $(this).attr('href');
  });
}
