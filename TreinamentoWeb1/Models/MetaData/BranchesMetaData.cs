using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace TreinamentoWeb1.Models.MetaData
{
    public class BranchesMetaData
    {
        [Display(Name = "name", ResourceType = typeof(Resources.Strings))]
        [Required(ErrorMessageResourceType = typeof(Resources.Strings), ErrorMessageResourceName = "required")]
        [MaxLength(50, ErrorMessageResourceType = typeof(Resources.Strings), ErrorMessageResourceName = "tamanhoErro")]
        public string name { get; set; }

        [Display(Name = "description", ResourceType = typeof(Resources.Strings))]
        [Required(ErrorMessageResourceType = typeof(Resources.Strings), ErrorMessageResourceName = "required")]
        public string description { get; set; }

        [Display(Name = "merge_executed", ResourceType = typeof(Resources.Strings))]
        public bool merge_executed { get; set; }

        [Display(Name = "parent_branch", ResourceType = typeof(Resources.Strings))]
        [Required(ErrorMessageResourceType = typeof(Resources.Strings), ErrorMessageResourceName = "required")]
        public string parent_branch { get; set; }

        [Display(Name = "type", ResourceType = typeof(Resources.Strings))]
        [Required(ErrorMessageResourceType = typeof(Resources.Strings), ErrorMessageResourceName = "required")]
        public string type { get; set; }

        [Display(Name = "product", ResourceType = typeof(Resources.Strings))]
        [Required(ErrorMessageResourceType = typeof(Resources.Strings), ErrorMessageResourceName = "required")]
        public string product { get; set; }
    }
}