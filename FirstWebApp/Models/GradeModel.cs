using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FirstWebApp.Models
{
    public class GradeModel
    {
        [Range(0.0, 100.0)]
        public double assignment { get; set; }
        [Range(0.0, 100.0)]
        public double group { get; set; }
        [Range(0.0, 100.0)]
        public double quiz { get; set; }
        [Range(0.0, 100.0)]
        public double exam { get; set; }
        [Range(0.0, 100.0)]
        public double intex { get; set; }

    }
}
