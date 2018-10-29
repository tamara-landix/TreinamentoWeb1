using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace TreinamentoWeb1.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/Scripts/jquery-1.10.2.min.js",
                "~/Scripts/jquery.validate.js",
                "~/Scripts/jquery.validate.unobstrusive.js",
                "~/Scripts/bootstrap.js",
                "~/Scripts/select2.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/bootstrap.css",
                "~/Content/css/select2.css",
                "~/Content/Site.css",
                "~/Content/styles.css"));

            bundles.Add(new ScriptBundle("~/bundles/branches").Include(
                "~/Scripts/branches.js"));
        }
    }
}