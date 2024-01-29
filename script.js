// Define un objeto JSON con los códigos de AT y sus valores
var atCodes = {
  "AMS GDC": [
    { code: "A0681 / Support Engineer - ERP Bg / COP 2.523.676 / USD 631", value: 2523676 },
	{ code: "A0682 / Support Engineer - ERP Jr / COP 3.364.907 / USD 841", value: 3364907 },
	{ code: "A0610 / Support Engineer ARS - WEB Tr / COP 3.575.624 / USD 894", value: 3575624 },
	{ code: "A0600 / Support Engineer ARS - Mainframe Tr / COP 3.630.914 / USD 908", value: 3630914 },
	{ code: "A0431 / Support Engineer ARS - Client Server - Oracle Tr / COP 3.679.529 / USD 920", value: 3679529 },
	{ code: "A0400 / System Analyst ARS -  Tr / COP 3.725.487 / USD 931", value: 3725487 },
	{ code: "A0641 / Functional Consultant - ERP Bg / COP 3.925.770 / USD 981", value: 3925770 },
	{ code: "A0661 / Software Engineer - ERP Bg / COP 3.925.770 / USD 981", value: 3925770 },
	{ code: "A0671 / Soft Eng Sys Admin - ERP Bg / COP 4.458.535 / USD 1.115", value: 4458535 },
	{ code: "A0940 / System Engineer Tr / COP 4.853.497 / USD 1.213", value: 4853497 },
	{ code: "A0620 / Process Quality Leader RD -  Tr / COP 4.883.303 / USD 1.221", value: 4883303 },
	{ code: "A0683 / Support Engineer - ERP Pr / COP 4.907.177 / USD 1.227", value: 4907177 },
	{ code: "A0611 / Support Engineer ARS - WEB Bg / COP 4.940.398 / USD 1.235", value: 4940398 },
	{ code: "A0401 / System Analyst ARS -  Bg / COP 5.153.365 / USD 1.288", value: 5153365 },
	{ code: "A0920 / Practice Specialist Tr / COP 5.510.543 / USD 1.378", value: 5510543 },
	{ code: "A0930 / Technical Consultant Tr / COP 5.554.837 / USD 1.389", value: 5554837 },
	{ code: "A0691 / Tech-Func Lead ERP Bg / COP 5.608.211 / USD 1.402", value: 5608211 },
	{ code: "A0651 / Functional ESP-ERP Bg / COP 5.608.223 / USD 1.402", value: 5608223 },
	{ code: "A0662 / Software Engineer - ERP JR / COP 6.309.224 / USD 1.577", value: 6309224 },
	{ code: "A0684 / Support Engineer - ERP  Sr / COP 6.309.224 / USD 1.577", value: 6309224 },
	{ code: "A0642 / Functional Consultant - ERP Jr / COP 6.589.618 / USD 1.647", value: 6589618 },
	{ code: "A0432 / Support Engineer ARS - Client Server - Oracle Bg / COP 6.611.644 / USD 1.653", value: 6611644 },
	{ code: "A0612 / Support Engineer ARS - WEB Jr / COP 6.740.987 / USD 1.685", value: 6740987 },
	{ code: "A0402 / System Analyst ARS -  Jr / COP 6.832.045 / USD 1.708", value: 6832045 },
	{ code: "A0621 / Process Quality Leader RD -  Bg / COP 7.014.184 / USD 1.754", value: 7014184 },
	{ code: "A0941 / System Engineer Bg / COP 7.284.389 / USD 1.821", value: 7284389 },
	{ code: "A0931 / Technical Consultant Bg / COP 7.518.494 / USD 1.880", value: 7518494 },
	{ code: "A0601 / Support Engineer ARS - Mainframe Bg / COP 7.680.849 / USD 1.920", value: 7680849 },
	{ code: "A0685 / Support Engineer - ERP  Ex / COP 7.711.318 / USD 1.928", value: 7711318 },
	{ code: "A0672 / Soft Eng Sys Admin - ERP Jr / COP 7.951.029 / USD 1.988", value: 7951029 },
	{ code: "A0921 / Practice Specialist Bg / COP 8.082.131 / USD 2.021", value: 8082131 },
	{ code: "A0421 / Service Manager ARS -  Bg / COP 8.322.980 / USD 2.081", value: 8322980 },
	{ code: "A0403 / System Analyst ARS -  Pr / COP 8.421.591 / USD 2.105", value: 8421591 },
	{ code: "A0622 / Process Quality Leader RD -  Jr / COP 8.501.509 / USD 2.125", value: 8501509 },
	{ code: "A0613 / Support Engineer ARS - WEB Pr / COP 8.683.791 / USD 2.171", value: 8683791 },
	{ code: "A0433 / Support Engineer ARS - Client Server - Oracle Jr / COP 8.775.491 / USD 2.194", value: 8775491 },
	{ code: "A0692 / Tech-Func Lead ERP Jr / COP 9.113.342 / USD 2.278", value: 9113342 },
	{ code: "A0942 / System Engineer Jr / COP 9.770.549 / USD 2.443", value: 9770549 },
	{ code: "A0623 / Process Quality Leader RD -  Pr / COP 9.813.001 / USD 2.453", value: 9813001 },
	{ code: "A0404 / System Analyst ARS -  Sr / COP 9.849.921 / USD 2.462", value: 9849921 },
	{ code: "A0932 / Technical Consultant Jr / COP 9.867.829 / USD 2.467", value: 9867829 },
	{ code: "A0422 / Service Manager ARS -  Jr / COP 10.151.209 / USD 2.538", value: 10151209 },
	{ code: "A0434 / Support Engineer ARS - Client Server - Oracle Pr / COP 10.219.614 / USD 2.555", value: 10219614 },
	{ code: "A0673 / Soft Eng Sys Admin - ERP Pr / COP 10.262.651 / USD 2.566", value: 10262651 },
	{ code: "A0663 / Software Engineer - ERP Pr / COP 10.443.414 / USD 2.611", value: 10443414 },
	{ code: "A0614 / Support Engineer ARS - WEB Sr / COP 10.574.264 / USD 2.644", value: 10574264 },
	{ code: "A0922 / Practice Specialist Jr / COP 10.635.978 / USD 2.659", value: 10635978 },
	{ code: "A0643 / Functional Consultant - ERP Pr / COP 10.978.967 / USD 2.745", value: 10978967 },
	{ code: "A0652 / Functional ESP-ERP Jr / COP 11.380.615 / USD 2.845", value: 11380615 },
	{ code: "A0405 / System Analyst ARS -  Ex / COP 11.565.120 / USD 2.891", value: 11565120 },
	{ code: "A0943 / System Engineer Pr / COP 11.697.981 / USD 2.924", value: 11697981 },
	{ code: "A0933 / Technical Consultant Pr / COP 11.814.399 / USD 2.954", value: 11814399 },
	{ code: "A0602 / Support Engineer ARS - Mainframe Jr / COP 11.909.633 / USD 2.977", value: 11909633 },
	{ code: "A0423 / Service Manager ARS -  Pr / COP 12.013.758 / USD 3.003", value: 12013758 },
	{ code: "A0693 / Tech-Func Lead ERP Pr / COP 12.261.145 / USD 3.065", value: 12261145 },
	{ code: "A0435 / Support Engineer ARS - Client Server - Oracle Sr / COP 12.293.606 / USD 3.073", value: 12293606 },
	{ code: "A0624 / Process Quality Leader RD -  Sr / COP 12.341.194 / USD 3.085", value: 12341194 },
	{ code: "A0664 / Software Engineer - ERP Sr / COP 12.906.477 / USD 3.227", value: 12906477 },
	{ code: "A0615 / Support Engineer ARS - WEB Ex / COP 13.238.610 / USD 3.310", value: 13238610 },
	{ code: "A0923 / Practice Specialist Pr / COP 13.442.001 / USD 3.361", value: 13442001 },
	{ code: "A0424 / Service Manager ARS -  Sr / COP 13.922.921 / USD 3.481", value: 13922921 },
	{ code: "A0944 / System Engineer Sr / COP 13.930.683 / USD 3.483", value: 13930683 },
	{ code: "A0934 / Technical Consultant Sr / COP 14.069.338 / USD 3.517", value: 14069338 },
	{ code: "A0406 / System Analyst ARS -  Ma / COP 14.451.086 / USD 3.613", value: 14451086 },
	{ code: "A0625 / Process Quality Leader RD -  Ex / COP 14.504.542 / USD 3.626", value: 14504542 },
	{ code: "A0653 / Functional ESP-ERP Pr / COP 14.842.463 / USD 3.711", value: 14842463 },
	{ code: "A0674 / Soft Eng Sys Admin - ERP Sr / COP 14.906.994 / USD 3.727", value: 14906994 },
	{ code: "A0644 / Functional Consultant - ERP Sr / COP 15.487.764 / USD 3.872", value: 15487764 },
	{ code: "A0436 / Support Engineer ARS - Client Server - Oracle Ex / COP 15.828.650 / USD 3.957", value: 15828650 },
	{ code: "A0694 / Tech-Func Lead ERP Sr / COP 16.133.098 / USD 4.033", value: 16133098 },
	{ code: "A0626 / Process Quality Leader RD -  Ma / COP 16.700.894 / USD 4.175", value: 16700894 },
	{ code: "A0924 / Practice Specialist Sr / COP 16.769.687 / USD 4.192", value: 16769687 },
	{ code: "A0616 / Support Engineer ARS - WEB Ma / COP 16.818.158 / USD 4.205", value: 16818158 },
	{ code: "A0665 / Software Engineer - ERP Ex / COP 16.853.804 / USD 4.213", value: 16853804 },
	{ code: "A0954 / Service Director Sr / COP 16.895.212 / USD 4.224", value: 16895212 },
	{ code: "A0945 / System Engineer Ex / COP 17.075.778 / USD 4.269", value: 17075778 },
	{ code: "A0425 / Service Manager ARS -  Ex / COP 17.137.321 / USD 4.284", value: 17137321 },
	{ code: "A0935 / Technical Consultant Ex / COP 17.245.740 / USD 4.311", value: 17245740 },
	{ code: "A0695 / Tech-Func Lead ERP Ex / COP 18.726.455 / USD 4.682", value: 18726455 },
	{ code: "A0645 / Functional Consultant - ERP Ex / COP 19.350.693 / USD 4.838", value: 19350693 },
	{ code: "A0675 / Soft Eng Sys Admin - ERP Ex / COP 19.662.800 / USD 4.916", value: 19662800 },
	{ code: "A0437 / Support Engineer ARS - Client Server - Oracle Ma / COP 19.823.431 / USD 4.956", value: 19823431 },
	{ code: "A0654 / Functional ESP-ERP Sr / COP 20.165.104 / USD 5.041", value: 20165104 },
	{ code: "A0946 / System Engineer Ma / COP 20.288.641 / USD 5.072", value: 20288641 },
	{ code: "A0955 / Service Director Ex / COP 20.336.604 / USD 5.084", value: 20336604 },
	{ code: "A0936 / Technical Consultant Ma / COP 20.490.602 / USD 5.123", value: 20490602 },
	{ code: "A0925 / Practice Specialist Ex / COP 21.052.478 / USD 5.263", value: 21052478 },
	{ code: "A0603 / Support Engineer ARS - Mainframe Pr / COP 21.564.872 / USD 5.391", value: 21564872 },
	{ code: "A0426 / Service Manager ARS -  Ma / COP 21.583.035 / USD 5.396", value: 21583035 },
	{ code: "A0604 / Support Engineer ARS - Mainframe Sr / COP 23.546.509 / USD 5.887", value: 23546509 },
	{ code: "A0655 / Functional ESP-ERP Ex / COP 23.546.509 / USD 5.887", value: 23546509 },
	{ code: "A0956 / Service Director Ma / COP 24.730.464 / USD 6.183", value: 24730464 },
	{ code: "A0926 / Practice Specialist Ma / COP 25.600.909 / USD 6.400", value: 25600909 },
	{ code: "A0605 / Support Engineer ARS - Mainframe Ex / COP 29.007.667 / USD 7.252", value: 29007667 },
	{ code: "A0606 / Support Engineer ARS - Mainframe Ma / COP 33.804.394 / USD 8.451", value: 33804394 }
  ],
  "APP DEV GDC": [
	{ code: "A0451 / Proc Qty Lead DD Bg / COP 4.645.737 / USD 1.161", value: 4645737 },
	{ code: "A0131 / Te Lead ARS-Mainf Bg / COP 6.222.582 / USD 1.556", value: 6222582 },
	{ code: "A0111 / Tech Lead ARS-Web Bg / COP 7.489.049 / USD 1.872", value: 7489049 },
	{ code: "A0132 / Te Lead ARS-Mainf Jr / COP 8.020.337 / USD 2.005", value: 8020337 },
	{ code: "A0452 / Proc Qty Lead DD Jr / COP 8.087.922 / USD 2.022", value: 8087922 },
	{ code: "A0121 / Tech Lead ARS-C S Bg / COP 8.237.954 / USD 2.059", value: 8237954 },
	{ code: "A1212 / Soft Eng-Web Spec Jr / COP 9.277.044 / USD 2.319", value: 9277044 },
	{ code: "A0112 / Tech Lead ARS-Web Jr / COP 9.286.420 / USD 2.322", value: 9286420 },
	{ code: "A0453 / Proc Qty Lead DD Pr / COP 9.775.971 / USD 2.444", value: 9775971 },
	{ code: "A0122 / Tech Lead ARS-C S Jr / COP 10.215.063 / USD 2.554", value: 10215063 },
	{ code: "A0133 / Te Lead ARS-Mainf Pr / COP 11.145.453 / USD 2.786", value: 11145453 },
	{ code: "A0454 / Proc Qty Lead DD Sr / COP 12.294.624 / USD 3.074", value: 12294624 },
	{ code: "A0113 / Tech Lead ARS-Web Pr / COP 12.545.944 / USD 3.136", value: 12545944 },
	{ code: "A0123 / Tech Lead ARS-C S Pr / COP 12.571.068 / USD 3.143", value: 12571068 },
	{ code: "A1213 / Soft Eng-Web Spec Pr / COP 13.142.480 / USD 3.286", value: 13142480 },
	{ code: "A0114 / Tech Lead ARS-Web Sr / COP 14.278.800 / USD 3.570", value: 14278800 },
	{ code: "A0455 / Proc Qty Lead DD Ex / COP 14.449.808 / USD 3.612", value: 14449808 },
	{ code: "A0134 / Te Lead ARS-Mainf Sr / COP 15.259.088 / USD 3.815", value: 15259088 },
	{ code: "A0124 / Tech Lead ARS-C S Sr / COP 16.021.949 / USD 4.005", value: 16021949 },
	{ code: "A1214 / Soft Eng-Web Spec Sr / COP 17.394.458 / USD 4.349", value: 17394458 },
	{ code: "A0115 / Tech Lead ARS-Web Ex / COP 18.865.343 / USD 4.716", value: 18865343 },
	{ code: "A0135 / Te Lead ARS-Mainf Ex / COP 19.362.413 / USD 4.841", value: 19362413 },
	{ code: "A0125 / Tech Lead ARS-C S Ex / COP 20.951.779 / USD 5.238", value: 20951779 },
	{ code: "A1215 / Soft Eng-Web Spec Ex / COP 22.806.068 / USD 5.702", value: 22806068 }
  ],
  "DIGITAL GDC": [
    { code: "A0750 / Digital Designer Tr / COP 3.127.465 / USD 782", value: 3127465 },
	{ code: "A0760 / Digital Developer Tr / COP 3.366.683 / USD 842", value: 3366683 },
	{ code: "A0761 / Digital Developer Bg / COP 4.105.711 / USD 1.026", value: 4105711 },
	{ code: "A0751 / Digital Designer Bg / COP 4.941.394 / USD 1.235", value: 4941394 },
	{ code: "A0762 / Digital Developer Jr / COP 5.807.976 / USD 1.452", value: 5807976 },
	{ code: "A0801 / Digital Analyst Bg / COP 5.859.413 / USD 1.465", value: 5859413 },
	{ code: "A0752 / Digital Designer Jr / COP 6.716.894 / USD 1.679", value: 6716894 },
	{ code: "A0802 / Digital Analyst Jr / COP 7.789.528 / USD 1.947", value: 7789528 },
	{ code: "A0832 / Digital Manager Jr / COP 8.515.162 / USD 2.129", value: 8515162 },
	{ code: "A0772 / Digital Engineer Jr / COP 8.963.328 / USD 2.241", value: 8963328 },
	{ code: "A0753 / Digital Designer Pr / COP 9.159.401 / USD 2.290", value: 9159401 },
	{ code: "A0803 / Digital Analyst Pr / COP 9.499.425 / USD 2.375", value: 9499425 },
	{ code: "A0822 / Digital Leader Jr / COP 9.679.689 / USD 2.420", value: 9679689 },
	{ code: "A0763 / Digital Developer Pr / COP 10.779.602 / USD 2.695", value: 10779602 },
	{ code: "A0804 / Digital Analyst Sr / COP 12.886.587 / USD 3.222", value: 12886587 },
	{ code: "A0782 / DigitalSpecialist Jr / COP 13.141.759 / USD 3.285", value: 13141759 },
	{ code: "A0754 / Digital Designer Sr / COP 13.433.788 / USD 3.358", value: 13433788 },
	{ code: "A0792 / Digital Architect Jr / COP 13.653.782 / USD 3.413", value: 13653782 },
	{ code: "A0833 / Digital Manager Pr / COP 13.857.305 / USD 3.464", value: 13857305 },
	{ code: "A0823 / Digital Leader Pr / COP 14.148.300 / USD 3.537", value: 14148300 },
	{ code: "A0773 / Digital Engineer Pr / COP 15.685.824 / USD 3.921", value: 15685824 },
	{ code: "A0783 / DigitalSpecialist Pr / COP 15.833.444 / USD 3.958", value: 15833444 },
	{ code: "A0764 / Digital Developer Sr / COP 15.869.902 / USD 3.967", value: 15869902 },
	{ code: "A0755 / Digital Designer Ex / COP 16.389.221 / USD 4.097", value: 16389221 },
	{ code: "A0805 / Digital Analyst Ex / COP 18.094.539 / USD 4.524", value: 18094539 },
	{ code: "A0784 / DigitalSpecialist Sr / COP 19.076.439 / USD 4.769", value: 19076439 },
	{ code: "A0834 / Digital Manager Sr / COP 19.248.747 / USD 4.812", value: 19248747 },
	{ code: "A0793 / Digital Architect Pr / COP 19.497.479 / USD 4.874", value: 19497479 },
	{ code: "A0824 / Digital Leader Sr / COP 20.679.473 / USD 5.170", value: 20679473 },
	{ code: "A0774 / Digital Engineer Sr / COP 21.287.904 / USD 5.322", value: 21287904 },
	{ code: "A0765 / Digital Developer Ex / COP 22.391.744 / USD 5.598", value: 22391744 },
	{ code: "A0835 / Digital Manager Ex / COP 22.672.738 / USD 5.668", value: 22672738 },
	{ code: "A0785 / DigitalSpecialist Ex / COP 22.983.661 / USD 5.746", value: 22983661 },
	{ code: "A0825 / Digital Leader Ex / COP 23.781.394 / USD 5.945", value: 23781394 },
	{ code: "A0775 / Digital Engineer Ex / COP 24.649.152 / USD 6.162", value: 24649152 },
	{ code: "A0794 / Digital Architect Sr / COP 24.919.845 / USD 6.230", value: 24919845 },
	{ code: "A0795 / Digital Architect Ex / COP 30.173.027 / USD 7.543", value: 30173027 }
  ],
  "ERP GDC": [
    { code: "A0311 / Soft Eng Sys ERP Bg / COP 4.025.000 / USD 1.006", value: 4025000 },
	{ code: "A0322 / Soft Eng ARS-ERP Bg / COP 4.025.000 / USD 1.006", value: 4025000 },
	{ code: "A0161 / Soft Eng BI - ERP Bg / COP 4.312.500 / USD 1.078", value: 4312500 },
	{ code: "A0441 / Func Cons ARS-ERP Bg / COP 4.312.500 / USD 1.078", value: 4312500 },
	{ code: "A0051 / Tech-Func LeadERP Bg / COP 5.750.000 / USD 1.438", value: 5750000 },
	{ code: "A0312 / Soft Eng Sys ERP Jr / COP 6.900.001 / USD 1.725", value: 6900001 },
	{ code: "A0323 / Soft Eng ARS-ERP Jr / COP 6.900.001 / USD 1.725", value: 6900001 },
	{ code: "A0011 / Proj Manager ERP Bg / COP 7.187.500 / USD 1.797", value: 7187500 },
	{ code: "A0162 / Soft Eng BI - ERP Jr / COP 8.050.001 / USD 2.013", value: 8050001 },
	{ code: "A0442 / Func Cons ARS-ERP Jr / COP 8.050.001 / USD 2.013", value: 8050001 },
	{ code: "A0041 / Proj Director ERP Bg / COP 9.027.500 / USD 2.257", value: 9027500 },
	{ code: "A0052 / Tech-Func LeadERP Jr / COP 9.487.501 / USD 2.372", value: 9487501 },
	{ code: "A0012 / Proj Manager ERP Jr / COP 11.500.001 / USD 2.875", value: 11500001 },
	{ code: "A0313 / Soft Eng Sys ERP Pr / COP 12.362.501 / USD 3.091", value: 12362501 },
	{ code: "A0324 / Soft Eng ARS-ERP Pr / COP 12.362.501 / USD 3.091", value: 12362501 },
	{ code: "A0042 / Proj Director ERP Jr / COP 12.765.001 / USD 3.191", value: 12765001 },
	{ code: "A0163 / Soft Eng BI - ERP Pr / COP 13.225.001 / USD 3.306", value: 13225001 },
	{ code: "A0443 / Func Cons ARS-ERP Pr / COP 13.225.001 / USD 3.306", value: 13225001 },
	{ code: "A0053 / Tech-Func LeadERP Pr / COP 14.950.001 / USD 3.738", value: 14950001 },
	{ code: "A0013 / Proj Manager ERP Pr / COP 16.675.001 / USD 4.169", value: 16675001 },
	{ code: "A0043 / Proj Director ERP Pr / COP 18.400.001 / USD 4.600", value: 18400001 },
	{ code: "A0314 / Soft Eng Sys ERP Sr / COP 20.125.001 / USD 5.031", value: 20125001 },
	{ code: "A0325 / Soft Eng ARS-ERP Sr / COP 20.125.001 / USD 5.031", value: 20125001 },
	{ code: "A0164 / Soft Eng BI - ERP Sr / COP 21.850.001 / USD 5.463", value: 21850001 },
	{ code: "A0444 / Func Cons ARS-ERP Sr / COP 21.850.001 / USD 5.463", value: 21850001 },
	{ code: "A0014 / Proj Manager ERP Sr / COP 23.000.001 / USD 5.750", value: 23000001 },
	{ code: "A0054 / Tech-Func LeadERP Sr / COP 23.575.001 / USD 5.894", value: 23575001 },
	{ code: "A0044 / Proj Director ERP Sr / COP 25.300.001 / USD 6.325", value: 25300001 },
	{ code: "A0315 / Soft Eng Sys ERP Ex / COP 25.875.001 / USD 6.469", value: 25875001 },
	{ code: "A0326 / Soft Eng ARS-ERP Ex / COP 25.875.001 / USD 6.469", value: 25875001 },
	{ code: "A0015 / Proj Manager ERP Ex / COP 28.750.001 / USD 7.188", value: 28750001 },
	{ code: "A0165 / Soft Eng BI - ERP Ex / COP 28.750.001 / USD 7.188", value: 28750001 },
	{ code: "A0445 / Func Cons ARS-ERP Ex / COP 28.750.001 / USD 7.188", value: 28750001 },
	{ code: "A0316 / Soft Eng Sys ERP Ma / COP 29.325.001 / USD 7.331", value: 29325001 },
	{ code: "A0327 / Soft Eng ARS-ERP Ma / COP 29.325.001 / USD 7.331", value: 29325001 },
	{ code: "A0055 / Tech-Func LeadERP Ex / COP 29.900.001 / USD 7.475", value: 29900001 },
	{ code: "A0045 / Proj Director ERP Ex / COP 30.475.001 / USD 7.619", value: 30475001 },
	{ code: "A0016 / Proj Manager ERP Ma / COP 32.200.001 / USD 8.050", value: 32200001 },
	{ code: "A0166 / Soft Eng BI - ERP Ma / COP 32.200.001 / USD 8.050", value: 32200001 },
	{ code: "A0056 / Tech-Func LeadERP Ma / COP 32.775.001 / USD 8.194", value: 32775001 },
	{ code: "A0046 / Proj Director ERP Ma / COP 33.350.001 / USD 8.338", value: 33350001 },
	{ code: "A0446 / Func Cons ARS-ERP Ma / COP 34.500.001 / USD 8.625", value: 34500001 }
  ],
  "GDC Infosec": [
    { code: "A0520 / Security Tester -  Tr / COP 7463526.. / USD 1865.882", value: 4800000 },
	{ code: "A0540 / Security Engineer -  Tr / COP 7463526.. / USD 1865.882", value: 6000000 },
	{ code: "A0521 / Security Tester -  Bg / COP 8458481.. / USD 2114.62", value: 6500000 },
	{ code: "A0530 / Security IT Auditor -  Tr / COP 8458481.. / USD 2114.62", value: 7500000 },
	{ code: "A0541 / Security Engineer -  Bg / COP 8458481.. / USD 2114.62", value: 8500000 },
	{ code: "A0550 / InfoSec Manager -  Tr / COP 8458481.. / USD 2114.62", value: 8932156 },
	{ code: "A0522 / Security Tester -  JR / COP 9871869.. / USD 2467.967", value: 8932156 },
	{ code: "A0531 / Security IT Auditor -  Bg / COP 9871869.. / USD 2467.967", value: 9000000 },
	{ code: "A0542 / Security Engineer -  JR / COP 9871869.. / USD 2467.967", value: 10424694 },
	{ code: "A0551 / InfoSec Manager -  Bg / COP 9871869.. / USD 2467.967", value: 10424694 },
	{ code: "A0523 / Security Tester -  Pr / COP 10985601.. / USD 2746.4", value: 10500000 },
	{ code: "A0543 / Security Engineer -  Pr / COP 10985601.. / USD 2746.4", value: 11500000 },
	{ code: "A0532 / Security IT Auditor -  JR / COP 11553452.. / USD 2888.363", value: 12200445 },
	{ code: "A0552 / InfoSec Manager -  JR / COP 11553452.. / USD 2888.363", value: 12200445 },
	{ code: "A0524 / Security Tester -  Sr / COP 11991732.. / USD 2997.933", value: 13000000 },
	{ code: "A0544 / Security Engineer -  Sr / COP 11991732.. / USD 2997.933", value: 13000000 },
	{ code: "A0525 / Security Tester -  Ex / COP 13134855.. / USD 3283.714", value: 13870407 },
	{ code: "A0533 / Security IT Auditor -  Pr / COP 13134855.. / USD 3283.714", value: 13870407 },
	{ code: "A0545 / Security Engineer -  Ex / COP 13134855.. / USD 3283.714", value: 15000000 },
	{ code: "A0553 / InfoSec Manager -  Pr / COP 13134855.. / USD 3283.714", value: 15000000 },
	{ code: "A0526 / Security Tester -  Ma / COP 14169742.. / USD 3542.436", value: 17000000 },
	{ code: "A0546 / Security Engineer -  Ma / COP 14169742.. / USD 3542.436", value: 17958397 },
	{ code: "A0534 / Security IT Auditor -  Sr / COP 17006058.. / USD 4251.515", value: 17958397 },
	{ code: "A0554 / InfoSec Manager -  Sr / COP 17006058.. / USD 4251.515", value: 18000000 },
	{ code: "A0535 / Security IT Auditor -  Ex / COP 20200000.. / USD 5050.", value: 21331200 },
	{ code: "A0555 / InfoSec Manager -  Ex / COP 20200000.. / USD 5050.", value: 21331200 },
	{ code: "A0536 / Security IT Auditor -  Ma / COP 24885000.. / USD 6221.25", value: 26278560 },
	{ code: "A0556 / InfoSec Manager -  Ma / COP 24885000.. / USD 6221.25", value: 26278560 }
  ],
  "ITIS GDC": [
    { code: "A0471 / Help D-ITIS-S Sup Tr / COP 2.126.577 / USD 532", value: 2126577 },
	{ code: "A0481 / Sup Eng-ITIS Desk Bg / COP 2.533.504 / USD 633", value: 2533504 },
	{ code: "A0472 / Help D-ITIS-S Sup Bg / COP 2.920.488 / USD 730", value: 2920488 },
	{ code: "A0851 / ITIS Data Center Facilities Bg / COP 3.300.000 / USD 825", value: 3300000 },
	{ code: "A0340 / DBA ARS Tr / COP 3.427.682 / USD 857", value: 3427682 },
	{ code: "A0510 / Sup Eng-ITIS Telc Tr  / COP 3.434.889 / USD 859", value: 3434889 },
	{ code: "A0482 / Sup Eng-ITIS Desk Jr / COP 3.522.519 / USD 881", value: 3522519 },
	{ code: "A1190 / Storage Tr / COP 3.850.000 / USD 963", value: 3850000 },
	{ code: "A0490 / S Eng-ITIS Server Tr / COP 3.892.514 / USD 973", value: 3892514 },
	{ code: "A0473 / Help D-ITIS-S Sup Jr / COP 3.958.030 / USD 990", value: 3958030 },
	{ code: "A0501 / Sup Eng-ITIS Syst Bg / COP 3.977.577 / USD 994", value: 3977577 },
	{ code: "A0511 / Sup Eng-ITIS Telc Bg / COP 4.034.885 / USD 1.009", value: 4034885 },
	{ code: "A0483 / Sup Eng-ITIS Desk Pr / COP 4.064.445 / USD 1.016", value: 4064445 },
	{ code: "A1160 / Cloud Tr / COP 4.070.000 / USD 1.018", value: 4070000 },
	{ code: "A0631 / ProcQ Leader ITIS Bg / COP 4.283.832 / USD 1.071", value: 4283832 },
	{ code: "A1200 / Process Automatio Tr / COP 4.510.000 / USD 1.128", value: 4510000 },
	{ code: "A0491 / S Eng-ITIS Server Bg / COP 4.542.615 / USD 1.136", value: 4542615 },
	{ code: "A0341 / DBA ARS Bg / COP 4.582.463 / USD 1.146", value: 4582463 },
	{ code: "A0484 / Sup Eng-ITIS Desk Sr / COP 4.700.619 / USD 1.175", value: 4700619 },
	{ code: "A0474 / Help D-ITIS-S Sup Pr / COP 4.871.422 / USD 1.218", value: 4871422 },
	{ code: "A1180 / Middleware Tr / COP 4.950.000 / USD 1.238", value: 4950000 },
	{ code: "A1161 / Cloud Bg / COP 5.060.000 / USD 1.265", value: 5060000 },
	{ code: "A1201 / Process Automatio Bg / COP 5.170.000 / USD 1.293", value: 5170000 },
	{ code: "A1191 / Storage Bg / COP 5.500.000 / USD 1.375", value: 5500000 },
	{ code: "A0632 / ProcQ Leader ITIS Jr / COP 5.563.316 / USD 1.391", value: 5563316 },
	{ code: "A0475 / Help D-ITIS-S Sup Sr / COP 5.583.603 / USD 1.396", value: 5583603 },
	{ code: "A0485 / Sup Eng-ITIS Desk Ex / COP 5.640.743 / USD 1.410", value: 5640743 },
	{ code: "A0502 / Sup Eng-ITIS Syst Jr / COP 5.675.997 / USD 1.419", value: 5675997 },
	{ code: "A0852 / ITIS Data Center Facilities Jr / COP 5.830.000 / USD 1.458", value: 5830000 },
	{ code: "A0512 / Sup Eng-ITIS Telc Jr / COP 5.840.977 / USD 1.460", value: 5840977 },
	{ code: "A0461 / Serv Manager ITIS-Bg / COP 5.935.380 / USD 1.484", value: 5935380 },
	{ code: "A0476 / Help D-ITIS-S Sup Ex / COP 6.263.444 / USD 1.566", value: 6263444 },
	{ code: "A0492 / S Eng-ITIS Server Jr / COP 6.486.854 / USD 1.622", value: 6486854 },
	{ code: "A1181 / Middleware Bg / COP 6.930.000 / USD 1.733", value: 6930000 },
	{ code: "A0633 / ProcQ Leader ITIS Pr / COP 7.271.000 / USD 1.818", value: 7271000 },
	{ code: "A1162 / Cloud Jr / COP 7.370.000 / USD 1.843", value: 7370000 },
	{ code: "A1202 / Process Automatio Jr / COP 7.370.000 / USD 1.843", value: 7370000 },
	{ code: "A0487 / Sup Eng-ITIS Desk Ma / COP 7.524.000 / USD 1.881", value: 7524000 },
	{ code: "A0342 / DBA ARS Jr / COP 7.683.156 / USD 1.921", value: 7683156 },
	{ code: "A0477 / Help D-ITIS-S Sup Ma / COP 7.797.600 / USD 1.949", value: 7797600 },
	{ code: "A0462 / Serv Manager ITIS-Jr / COP 8.128.890 / USD 2.032", value: 8128890 },
	{ code: "A1192 / Storage Jr / COP 8.140.000 / USD 2.035", value: 8140000 },
	{ code: "A0493 / S Eng-ITIS Server Pr / COP 8.177.368 / USD 2.044", value: 8177368 },
	{ code: "A0513 / Sup Eng-ITIS Telc Pr / COP 8.534.560 / USD 2.134", value: 8534560 },
	{ code: "A0503 / Sup Eng-ITIS Syst Pr / COP 8.625.240 / USD 2.156", value: 8625240 },
	{ code: "A0853 / ITIS Data Center Facilities Pr / COP 9.130.000 / USD 2.283", value: 9130000 },
	{ code: "A1182 / Middleware Jr / COP 9.240.000 / USD 2.310", value: 9240000 },
	{ code: "A0634 / ProcQ Leader ITIS Sr / COP 9.851.600 / USD 2.463", value: 9851600 },
	{ code: "A0463 / Serv Manager ITIS-Pr / COP 9.967.568 / USD 2.492", value: 9967568 },
	{ code: "A0343 / DBA ARS Pr / COP 10.384.657 / USD 2.596", value: 10384657 },
	{ code: "A1203 / Process Automatio Pr / COP 10.560.000 / USD 2.640", value: 10560000 },
	{ code: "A1163 / Cloud Pr / COP 10.780.000 / USD 2.695", value: 10780000 },
	{ code: "A0494 / S Eng-ITIS Server Sr / COP 10.862.057 / USD 2.716", value: 10862057 },
	{ code: "A0504 / Sup Eng-ITIS Syst Sr / COP 10.970.415 / USD 2.743", value: 10970415 },
	{ code: "A0635 / ProcQ Leader ITIS Ma / COP 11.000.000 / USD 2.750", value: 11000000 },
	{ code: "A0514 / Sup Eng-ITIS Telc Sr / COP 11.687.211 / USD 2.922", value: 11687211 },
	{ code: "A0854 / ITIS Data Center Facilities Sr / COP 11.770.000 / USD 2.943", value: 11770000 },
	{ code: "A1183 / Middleware Pr / COP 12.320.000 / USD 3.080", value: 12320000 },
	{ code: "A1193 / Storage Pr / COP 12.320.000 / USD 3.080", value: 12320000 },
	{ code: "A0636 / ProcQ Leader ITIS Ex / COP 12.650.000 / USD 3.163", value: 12650000 },
	{ code: "A0495 / S Eng-ITIS Server Ex / COP 12.881.871 / USD 3.220", value: 12881871 },
	{ code: "A1204 / Process Automatio Sr / COP 13.090.000 / USD 3.273", value: 13090000 },
	{ code: "A0464 / Serv Manager ITIS-Sr / COP 13.430.340 / USD 3.358", value: 13430340 },
	{ code: "A1164 / Cloud Sr / COP 13.750.000 / USD 3.438", value: 13750000 },
	{ code: "A1205 / Process Automatio Ex / COP 14.740.000 / USD 3.685", value: 14740000 },
	{ code: "A0505 / Sup Eng-ITIS Syst Ex / COP 14.931.378 / USD 3.733", value: 14931378 },
	{ code: "A0855 / ITIS Data Center Facilities Ex / COP 15.070.000 / USD 3.768", value: 15070000 },
	{ code: "A0465 / Serv Manager ITIS-Ex / COP 15.364.309 / USD 3.841", value: 15364309 },
	{ code: "A1184 / Middleware Sr / COP 15.400.000 / USD 3.850", value: 15400000 },
	{ code: "A0344 / DBA ARS Sr / COP 15.512.043 / USD 3.878", value: 15512043 },
	{ code: "A1194 / Storage Sr / COP 15.950.000 / USD 3.988", value: 15950000 },
	{ code: "A0496 / S Eng-ITIS Server Ma / COP 16.541.400 / USD 4.135", value: 16541400 },
	{ code: "A0466 / Serv Manager ITIS-Ma / COP 16.853.760 / USD 4.213", value: 16853760 },
	{ code: "A1185 / Middleware Ex / COP 17.050.000 / USD 4.263", value: 17050000 },
	{ code: "A0506 / Sup Eng-ITIS Syst Ma / COP 17.556.000 / USD 4.389", value: 17556000 },
	{ code: "A0515 / Sup Eng-ITIS Telc Ex / COP 17.559.210 / USD 4.390", value: 17559210 },
	{ code: "A1195 / Storage Ex / COP 17.600.000 / USD 4.400", value: 17600000 },
	{ code: "A1206 / Process Automatio Ma / COP 18.150.000 / USD 4.538", value: 18150000 },
	{ code: "A1165 / Cloud Ex / COP 18.700.000 / USD 4.675", value: 18700000 },
	{ code: "A1186 / Middleware Ma / COP 20.130.000 / USD 5.033", value: 20130000 },
	{ code: "A1196 / Storage Ma / COP 20.790.000 / USD 5.198", value: 20790000 },
	{ code: "A0345 / DBA ARS Ex / COP 20.816.400 / USD 5.204", value: 20816400 },
	{ code: "A0516 / Sup Eng-ITIS Telc Ma / COP 21.819.600 / USD 5.455", value: 21819600 },
	{ code: "A1172 / Architect Jr / COP 22.330.000 / USD 5.583", value: 22330000 },
	{ code: "A0346 / DBA ARS Ma / COP 23.199.000 / USD 5.800", value: 23199000 },
	{ code: "A1166 / Cloud Ma / COP 23.980.000 / USD 5.995", value: 23980000 },
	{ code: "A1173 / Architect Pr / COP 25.850.000 / USD 6.463", value: 25850000 },
	{ code: "A1174 / Architect Sr / COP 29.260.000 / USD 7.315", value: 29260000 },
	{ code: "A1175 / Architect Ex / COP 31.680.000 / USD 7.920", value: 31680000 },
	{ code: "A1176 / Architect Ma / COP 33.880.000 / USD 8.470", value: 33880000 }
  ],
  "QA&VALIDAT GDC": [
	{ code: "A0381 / Test Engineer ARS-Tr / COP 2.956.800 / USD 739", value: 2956800 },
	{ code: "A0382 / Test Engineer ARS-Bg / COP 3.696.000 / USD 924", value: 3696000 },
	{ code: "A0383 / Test Engineer ARS-Jr / COP 4.224.000 / USD 1.056", value: 4224000 },
	{ code: "A0391 / Aut Test Eng ARS-Tr / COP 5.041.872 / USD 1.260", value: 5041872 },
	{ code: "A0384 / Test Engineer ARS-Pr / COP 5.280.000 / USD 1.320", value: 5280000 },
	{ code: "A1100 / Software Test Tr / COP 5.377.997 / USD 1.344", value: 5377997 },
	{ code: "A0392 / Aut Test Eng ARS-Bg / COP 5.898.990 / USD 1.475", value: 5898990 },
	{ code: "A1131 / Hybrid Test Eng Bg / COP 6.248.559 / USD 1.562", value: 6248559 },
	{ code: "A1101 / Software Test Bg / COP 6.292.256 / USD 1.573", value: 6292256 },
	{ code: "A0393 / Aut Test Eng ARS-Jr / COP 6.901.819 / USD 1.725", value: 6901819 },
	{ code: "A0371 / Test Leader ARS - Bg / COP 6.946.579 / USD 1.737", value: 6946579 },
	{ code: "A1111 / SDET Bg / COP 7.209.875 / USD 1.802", value: 7209875 },
	{ code: "A1121 / Performance Test Bg / COP 7.209.875 / USD 1.802", value: 7209875 },
	{ code: "A1102 / Software Test Jr / COP 7.361.940 / USD 1.840", value: 7361940 },
	{ code: "A0385 / Test Engineer ARS-Sr / COP 7.920.000 / USD 1.980", value: 7920000 },
	{ code: "A0394 / Aut Test Eng ARS-Pr / COP 8.075.128 / USD 2.019", value: 8075128 },
	{ code: "A0372 / Test Leader ARS - Jr / COP 8.127.498 / USD 2.032", value: 8127498 },
	{ code: "A1132 / Hybrid Test Eng Jr / COP 8.335.734 / USD 2.084", value: 8335734 },
	{ code: "A1103 / Software Test Pr / COP 8.613.470 / USD 2.153", value: 8613470 },
	{ code: "A0395 / Aut Test Eng ARS-Sr / COP 9.447.899 / USD 2.362", value: 9447899 },
	{ code: "A0373 / Test Leader ARS - Pr / COP 9.509.172 / USD 2.377", value: 9509172 },
	{ code: "A1122 / Performance Test Jr / COP 9.618.154 / USD 2.405", value: 9618154 },
	{ code: "A1104 / Software Test Sr / COP 10.077.759 / USD 2.519", value: 10077759 },
	{ code: "A0386 / Test Engineer ARS-Ex / COP 10.560.000 / USD 2.640", value: 10560000 },
	{ code: "A0396 / Aut Test Eng ARS-Ex / COP 11.054.042 / USD 2.764", value: 11054042 },
	{ code: "A1133 / Hybrid Test Eng Pr / COP 11.120.078 / USD 2.780", value: 11120078 },
	{ code: "A0374 / Test Leader ARS - Sr / COP 11.125.732 / USD 2.781", value: 11125732 },
	{ code: "A1105 / Software Test Ex / COP 11.790.979 / USD 2.948", value: 11790979 },
	{ code: "A1112 / SDET Jr / COP 12.016.460 / USD 3.004", value: 12016460 },
	{ code: "A1123 / Performance Test Pr / COP 12.830.858 / USD 3.208", value: 12830858 },
	{ code: "A0397 / Aut Test Eng ARS-Ma / COP 12.933.230 / USD 3.233", value: 12933230 },
	{ code: "A0375 / Test Leader ARS - Ex / COP 13.017.106 / USD 3.254", value: 13017106 },
	{ code: "A1113 / SDET Pr / COP 13.218.107 / USD 3.305", value: 13218107 },
	{ code: "A0387 / Test Engineer ARS-Ma / COP 13.728.000 / USD 3.432", value: 13728000 },
	{ code: "A1106 / Software Test Ma / COP 13.795.445 / USD 3.449", value: 13795445 },
	{ code: "A1134 / Hybrid Test Eng Sr / COP 14.834.462 / USD 3.709", value: 14834462 },
	{ code: "A0363 / QA Manager ARS -  Pr / COP 15.372.106 / USD 3.843", value: 15372106 },
	{ code: "A1124 / Performance Test Sr / COP 17.116.685 / USD 4.279", value: 17116685 },
	{ code: "A0364 / QA Manager ARS -  Sr / COP 17.985.364 / USD 4.496", value: 17985364 },
	{ code: "A1114 / SDET Sr / COP 18.733.354 / USD 4.683", value: 18733354 },
	{ code: "A1135 / Hybrid Test Eng Ex / COP 19.789.543 / USD 4.947", value: 19789543 },
	{ code: "A0365 / QA Manager ARS -  Ex / COP 21.042.876 / USD 5.261", value: 21042876 },
	{ code: "A1115 / SDET Ex / COP 22.667.358 / USD 5.667", value: 22667358 },
	{ code: "A1125 / Performance Test Ex / COP 22.834.086 / USD 5.709", value: 22834086 },
	{ code: "A0366 / QA Manager ARS -  Ma / COP 24.620.165 / USD 6.155", value: 24620165 },
	{ code: "A1116 / SDET Ma / COP 24.934.096 / USD 6.234", value: 24934096 },
	{ code: "A1136 / Hybrid Test Eng Ma / COP 26.399.745 / USD 6.600", value: 26399745 },
	{ code: "A1126 / Performance Test Ma / COP 30.461.241 / USD 7.615", value: 30461241 }
  ]
};

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function formatInputValue(input) {
  var value = input.value.replace(/\./g, '');
  input.value = formatNumber(value);
}

function calculateCost() {
  var salaryInput = document.getElementById('salary');
  var bonusesInput = document.getElementById('bonuses');
  var salary = parseFloat(salaryInput.value.replace(/\./g, ''));
  var bonuses = parseFloat(bonusesInput.value.replace(/\./g, ''));
  var integral = document.getElementById('integral').checked;
  var connectivityBonus = document.getElementById('connectivity-bonus').checked;
  var suraPolicy = document.getElementById('sura-policy').checked;
  var sanitas = document.getElementById('sanitas').checked;
  var lifeInsurance = document.getElementById('life-insurance').checked;
  var result = document.getElementById('result');

  var smmlv = 1300000; // Valor del salario mínimo mensual legal vigente
  var transportAllowance = 162000; // Auxilio de transporte

  if (integral && salary <= 16899999) {
    result.innerHTML = 'El salario debe ser superior a $16.899.999 para el régimen integral.';
    return;
  }

  // Limitar el valor de "bonuses" al 40% del salario ingresado
  var maxBonuses = salary * 0.4;
  
  if (bonuses > maxBonuses) {
    result.innerHTML = 'Las bonificaciones no pueden superar el 40% del salario prestacional, es decir: ' + formatNumber(maxBonuses);
    return;
  }
  
  if (integral) {
    var cost = Math.ceil(salary * 1.27135 + bonuses); // Cálculo del costo según régimen integral
  } else if (salary < 2 * smmlv) {
    var cost = Math.ceil(salary * 1.40308 + transportAllowance + 45000 + bonuses); // Cálculo del costo según escenario 1
  } else if (salary + bonuses < 10 * smmlv) {
    var cost = Math.ceil(salary * 1.40308 + bonuses); // Cálculo del costo según escenario 2
  } else {
    var cost = Math.ceil(salary * 1.53808 + bonuses); // Cálculo del costo según escenario 3
  }

  if (connectivityBonus) {
    cost += 66000;
  }
  if (suraPolicy) {
    cost += 339291;
  }
  if (sanitas) {
    cost += 316400;
  }
  if (lifeInsurance) {
    cost += 24111;
  }
  
  var departmentSelect = document.getElementById('department');
  var selectedDepartment = departmentSelect.value;
  var departmentATs = atCodes[selectedDepartment];

  if (departmentATs && departmentATs.length > 0) {
    var nextAT = null;
    for (var i = 0; i < departmentATs.length; i++) {
      if (departmentATs[i].value > cost) {
        nextAT = departmentATs[i].code;
        break;
      }
    }

    if (nextAT) {
      result.innerHTML = 'El costo total del empleado es: $' + formatNumber(cost) + '<br>' + '<br>';
      result.innerHTML += 'Código de AT para la práctica ' + selectedDepartment + ': ' + nextAT;
    } else {
      result.innerHTML = 'El costo total del empleado es: $' + formatNumber(cost) + '<br>' + '<br>';
      result.innerHTML += 'No se encontró un código de AT adecuado para la práctica ' + selectedDepartment;
    }
  } else {
    result.innerHTML = 'El costo total del empleado es: $' + formatNumber(cost) + '<br>' + '<br>';
    result.innerHTML += 'No se encontraron códigos de AT para la práctica ' + selectedDepartment;
  }

  var formattedCost = formatNumber(cost).replace(/\./g, "");
  document.getElementById("amount").value = formattedCost;
}
