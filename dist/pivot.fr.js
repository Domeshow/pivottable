(function() {
  var callWithJQuery;

  callWithJQuery = function(pivotModule) {
    if (typeof exports === "object" && typeof module === "object") {
      return pivotModule(require("jquery"));
    } else if (typeof define === "function" && define.amd) {
      return define(["jquery"], pivotModule);
    } else {
      return pivotModule(jQuery);
    }
  };

  callWithJQuery(function($) {
    var frFmt, frFmtInt, frFmtPct, nf, tpl;
    nf = $.pivotUtilities.numberFormat;
    tpl = $.pivotUtilities.aggregatorTemplates;
    frFmt = nf({
      thousandsSep: " ",
      decimalSep: ","
    });
    frFmtInt = nf({
      digitsAfterDecimal: 0,
      thousandsSep: " ",
      decimalSep: ","
    });
    frFmtPct = nf({
      digitsAfterDecimal: 1,
      scaler: 100,
      suffix: "%",
      thousandsSep: " ",
      decimalSep: ","
    });
    return $.pivotUtilities.locales.fr = {
      localeStrings: {
        renderError: "Une erreur est survenue en dessinant le tableau croisé.",
        computeError: "Une erreur est survenue en calculant le tableau croisé.",
        uiRenderError: "Une erreur est survenue en dessinant l'interface du tableau croisé dynamique.",
        selectAll: "Sélectionner tout",
        selectNone: "Sélectionner rien",
        tooMany: "(trop de valeurs à afficher)",
        filterResults: "Filtrer les valeurs",
        totals: "Totaux",
        vs: "sur",
        by: "par",
        apply: "Appliquer",
        cancel: "Annuler"
      },
      aggregators: {
        "Count" : {
          "Value": "Nombre",
          "Function": tpl.count(frFmtInt),
        },
        "Count Unique Values": {
          "Value": "Nombre de valeurs uniques",
          "Function": tpl.countUnique(frFmtInt),
        },
        "List Unique Values": {
          "Value": "Liste de valeurs uniques",
          "Function": tpl.listUnique(", "),
        },
        "Sum": {
          "Value": "Somme",
          "Function": tpl.sum(frFmt),
        },
        "Integer Sum": {
          "Value": "Somme en entiers",
          "Function": tpl.sum(frFmtInt),
        },
        "Average": {
          "Value": "Moyenne",
          "Function": tpl.average(frFmt),
        },
        "Minimum": {
          "Value": "Minimum",
          "Function": tpl.min(frFmt),
        },
        "Maximum": {
          "Value": "Maximum",
          "Function": tpl.max(frFmt),
        },
        "First": {
          "Value": "Premier",
          "Function": tpl.first(frFmt),
        },
        "Last": {
          "Value": "Dernier",
          "Function": tpl.last(frFmt),
        },
        "Sum over Sum": {
          "Value": "Ratio de sommes",
          "Function": tpl.sumOverSum(frFmt),
        },
        "80% Upper Bound": {
          "Value": "Borne supérieure 80%",
          "Function": tpl.sumOverSumBound80(true, frFmt),
        },
        "80% Lower Bound": {
          "Value": "Borne inférieure 80%",
          "Function": tpl.sumOverSumBound80(false, frFmt),
        },
        "Sum as Fraction of Total": {
          "Value": "Somme en proportion du totale",
          "Function": tpl.fractionOf(tpl.sum(), "total", frFmtPct),
        },
        "Sum as Fraction of Rows": {
          "Value": "Somme en proportion de la ligne",
          "Function": tpl.fractionOf(tpl.sum(), "row", frFmtPct),
        },
        "Sum as Fraction of Columns": {
          "Value": "Somme en proportion de la colonne",
          "Function": tpl.fractionOf(tpl.sum(), "col", frFmtPct),
        },
        "Count as Fraction of Total": {
          "Value": "Nombre en proportion du totale",
          "Function": tpl.fractionOf(tpl.count(), "total", frFmtPct),
        },
        "Count as Fraction of Rows": {
          "Value": "Nombre en proportion de la ligne",
          "Function": tpl.fractionOf(tpl.count(), "row", frFmtPct),
        },
        "Count as Fraction of Columns": {
          "Value": "Nombre en proportion de la colonne",
          "Function": tpl.fractionOf(tpl.count(), "col", frFmtPct),
        }
      },
      renderers: {
        "Table": $.pivotUtilities.renderers["Table"],
        "Table avec barres": $.pivotUtilities.renderers["Table Barchart"],
        "Carte de chaleur": $.pivotUtilities.renderers["Heatmap"],
        "Carte de chaleur par ligne": $.pivotUtilities.renderers["Row Heatmap"],
        "Carte de chaleur par colonne": $.pivotUtilities.renderers["Col Heatmap"]
      }
    };
  });

}).call(this);

//# sourceMappingURL=pivot.fr.js.map
