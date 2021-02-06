// Resolve name collision between jQuery UI and Twitter Bootstrap
$.widget.bridge('uitooltip', $.ui.tooltip);

var Koha = {};
function _(s) { return s } // dummy function for gettext

Modernizr.load([
    // Test need for polyfill
    {
        test: window.matchMedia,
        nope: "/opac-tmpl/bootstrap/lib/media.match.min_20.1102000.js"
    },
    // and then load enquire
    "/opac-tmpl/bootstrap/lib/enquire.min_20.1102000.js",
    "/opac-tmpl/bootstrap/js/script_20.1102000.js",
]);

// Fix for datepicker in a modal
$.fn.modal.Constructor.prototype.enforceFocus = function () { };

var MSG_CONFIRM_AGAIN = _("Advertencia: No puede deshacerse. Por favor confirmar nuevamente")
var MSG_DELETE_SEARCH_HISTORY = _("¿Está seguro que desea eliminar su historial de búsqueda?");
var MSG_NO_SUGGESTION_SELECTED = _("No se seleccionó ninguna sugerencia");
var MSG_SEARCHING = _("Buscando %s...");
var MSG_ERROR_SEARCHING_COLLECTION = _("Error de la búsqueda en la colección %s");
var MSG_NO_RESULTS_FOUND_IN_COLLECTION = _("No se han encontrado resultados en la colección de la biblioteca %s");
var MSG_RESULTS_FOUND_IN_COLLECTION = _("Se encontraron %s resultados en la colección de la biblioteca %s");
var MSG_BY = _("por");
var MSG_TYPE = _("Tipo");
var MSG_NEXT = _("Siguiente");
var MSG_PREVIOUS = _("Previo");
var MSG_CHECKOUTS = _("Préstamos");
var MSG_NO_CHECKOUTS = _("Sin préstamos");
var MSG_CHECK_OUT = _("Préstamo");
var MSG_CHECK_OUT_CONFIRM = _("¿Está seguro de querer prestar esta éste ítem?");
var MSG_CHECKED_OUT_UNTIL = _("Prestado hasta %s");
var MSG_CHECK_IN = _("Devolución");
var MSG_CHECK_IN_CONFIRM = _("¿Está seguro de querer devolver éste ítem?");
var MSG_NO_CHECKOUTS = _("Sin préstamos");
var MSG_DOWNLOAD = _("Bajar");
var MSG_HOLDS = _("Reservas");
var MSG_NO_HOLDS = _("Sin reservas");
var MSG_PLACE_HOLD = _("Hacer reserva");
var MSG_CANCEL_HOLD = _("Cancelar");
var MSG_CANCEL_HOLD_CONFIRM = _("¿Está seguro que desea cancelar esta reserva?");
var MSG_ON_HOLD = _("Reservado");
var MSG_TAGS_DISABLED = _("Lo sentimos, las etiquetas no están habilitadas en este sistema.");
var MSG_TAG_ALL_BAD = _("Error! Su etiqueta tenía código ilegal. NO ha sido agregada. Intente nuevamente con texto plano.");
var MSG_ILLEGAL_PARAMETER = _("¡Error! Parámetro ilegal");
var MSG_TAG_SCRUBBED = _("Nota: su etiqueta contenía código que fue removido. La etiqueta fue agregada como ");
var MSG_ADD_TAG_FAILED = _("¡Error! La adición de etiquetas falló en");
var MSG_ADD_TAG_FAILED_NOTE = _("Nota: solo puede etiquetar un ítem con determinado término una vez. Vea 'Mis Etiquetas' para ver sus etiquetas actuales.");
var MSG_DELETE_TAG_FAILED = _("Error! No puede eliminar la etiqueta");
var MSG_DELETE_TAG_FAILED_NOTE = _("Nota: sólo puede eliminar sus propias etiquetas.")
var MSG_LOGIN_REQUIRED = _("Debe ingresar a su cuenta para agregar etiquetas.");
var MSG_TAGS_ADDED = _("Etiquetas agregadas: ");
var MSG_TAGS_DELETED = _("Etiquetas agregadas: ");
var MSG_TAGS_ERRORS = _("Errores: ");
var MSG_MULTI_ADD_TAG_FAILED = _("No se pudo agregar una o más etiquetas.");
var MSG_NO_TAG_SPECIFIED = _("No se especificó etiqueta.");

$(".print-large").on("click", function () {
    window.print();
    return false;
});
$("#ulactioncontainer > ul > li > a.addtoshelf").on("click", function () {
    Dopop('opac-addbybiblionumber.pl?biblionumber=');
    return false;
});
$("body").on("click", ".addtocart", function (e) {
    e.preventDefault();
    var biblionumber = $(this).data("biblionumber");
    addRecord(biblionumber);
});
$("body").on("click", ".cartRemove", function (e) {
    e.preventDefault();
    var biblionumber = $(this).data("biblionumber");
    delSingleRecord(biblionumber);
});
$(".clearsh").on("click", function () {
    return confirmDelete(MSG_DELETE_SEARCH_HISTORY);
});

$(document).ready(function () {
    if ($('#searchsubmit').length) {
        $(document).on("click", '#searchsubmit', function (e) {
            jQuery.removeCookie("form_serialized", { path: '/' });
            jQuery.removeCookie("form_serialized_limits", { path: '/' });
            jQuery.removeCookie("num_paragraph", { path: '/' });
            jQuery.removeCookie("search_path_code", { path: '/' });
        });
    }
});