var mongoose = require('mongoose'),
        conn = mongoose.connect(
            process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            "mongodb://localhost/pizzaMapper"
        ),
        Place = require("../models/place"),
        List = require("../models/list");
        // User = require("../models/use");

 Place.remove({}, function(err){
  if (err) console.log("ERROR: ", err);
});

List.remove({}, function(err){
  if (err) console.log("ERROR: ", err);
});

var places = [
    {
      name: "Little Star",
      address: "846 Divisadero Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 441-1118",
      description: "",
      website: "http://www.littlestarpizza.com/",
      pic: "",
      lat: 37.777548,
      long: -122.438007
    },
    {
      name: "Arinell Pizza",
      address: "509 Valencia Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 441-1118",
      description: "",
      website: "http://arinell-pizza.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Beretta",
      address: "1199 Valencia Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 695-1199",
      description: "",
      website: "http://berettasf.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Delarosa",
      address: "2175 Chestnut Street San Francisco",
      city: "San Francisco",
      phone: "(415) 673-7100",
      description: "",
      website: "http://www.delarosasf.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Capo's",
      address: "641 Vallejo San Francisco",
      city: "San Francisco",
      phone: "(415) 986-8998",
      description: "",
      website: "http://www.sfcapos.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Pizzeria Delfina",
      address: "3621 18th Street San Francisco",
      city: "San Francisco",
      phone: "(415) 437-6800",
      description: "",
      website: "http://pizzeriadelfina.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Del Popolo",
      address: "855 Bush Street San Francisco",
      city: "San Francisco",
      phone: "(415) 589-7940",
      description: "",
      website: "http://www.delpopolosf.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Gialina",
      address: "2842 Diamond Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 239-8500",
      description: "",
      website: "http://www.gialina.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Jay 'n' Bee Club",
      address: "2736 20th Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 824-4190",
      description: "",
      website: "",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Jersey",
      address: "145 2nd Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 912-1502",
      description: "",
      website: "http://www.jerseysf.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Mozzeria",
      address: "3228 16th Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 489-0963",
      description: "",
      website: "http://www.mozzeria.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Pauline's",
      address: "260 Valencia Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 552-2050",
      description: "",
      website: "http://www.paulinespizza.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "PizzaHacker",
      address: "3299 Mission Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 874-5585",
      description: "",
      website: "http://www.thepizzahacker.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "The Pizza Shop",
      address: "3104 24th Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 824-1840",
      description: "",
      website: "",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Pizzetta 211",
      address: "211 23rd Avenue, San Francisco",
      city: "San Francisco",
      phone: "(415) 379-9880",
      description: "",
      website: "http://www.pizzetta211.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Tony's Pizza Napoletana",
      address: "1570 Stockton Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 835-9888",
      description: "",
      website: "http://www.tonyspizzanapoletana.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Una Pizza Napoletana",
      address: "210 11th Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 861-3444",
      description: "",
      website: "http://www.unapizza.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Zante",
      address: "3489 Mission Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 821-3949",
      description: "",
      website: "http://zantepizza.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Zero Zero",
      address: "826 Folsom Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 348-8800",
      description: "",
      website: "http://www.zerozerosf.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Pizzeria Avellino",
      address: "2769 Lombard Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 776-2500",
      description: "",
      website: "http://pizzeria-avellino.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Flour + Water",
      address: "2401 Harrison Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 826-7000",
      description: "",
      website: "http://www.flourandwater.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Giorgio's",
      address: "151 Clement Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 668-1266",
      description: "",
      website: "http://www.giorgiospizza.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Gioia Pizzeria",
      address: "2240 Polk Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 359-0971",
      description: "",
      website: "http://www.gioiapizzeria.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Marcello's",
      address: "420 Castro Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 863-3900",
      description: "",
      website: "http://www.marcellospizzasf.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Patxi’s",
      address: "511 Hayes Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 558-9991",
      description: "",
      website: "http://www.patxispizza.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Ragazza",
      address: "311 Divisadero Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 255-1133",
      description: "",
      website: "http://www.ragazzasf.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Tommaso's",
      address: "1042 Kearny Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 398-9696",
      description: "",
      website: "http://tommasos.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Carmel Pizza Company",
      address: "2826 Jones Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 676-1185",
      description: "",
      website: "",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Golden Boy Pizza",
      address: "542 Beach Blanket Babylon Boulevard, San Francisco",
      city: "San Francisco",
      phone: "(415) 982-9738",
      description: "",
      website: "http://www.goldenboypizza.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Montesacro Pinseria-Enoteca",
      address: "510 Stevenson Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 795-3040",
      description: "",
      website: "http://www.montesacrosf.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Il Casaro Pizzeria & Mozzarella Bar",
      address: "348 Columbus Avenue, San Francisco",
      city: "San Francisco",
      phone: "(415) 677-9455",
      description: "",
      website: "http://www.ilcasarosf.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Arizmendi Bakery",
      address: "1331 9th Avenue, San Francisco",
      city: "San Francisco",
      phone: "(415) 566-3117",
      description: "",
      website: "http://www.arizmendibakery.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Arizmendi Bakery Lakeshore",
      address: "3265 Lakeshore Avenue, Oakland",
      city: "Oakland",
      phone: "(510) 268-8849",
      description: "",
      website: "http://arizmendilakeshore.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Amazona’s Pizza",
      address: "2427 Telegraph Avenue, Oakland",
      city: "Oakland",
      phone: "(510) 625-1233",
      description: "",
      website: "http://www.amazonaspizza.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "The Star on Grand",
      address: "3425 Grand Avenue, Oakland",
      city: "Oakland",
      phone: "(510) 843-7827",
      description: "",
      website: "http://www.thestarongrand.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Zachary’s Chicago Pizza",
      address: "5801 College Avenue, Oakland",
      city: "Oakland",
      phone: "(510) 655-6385",
      description: "",
      website: "http://www.zacharys.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Pizzaiolo",
      address: "5008 Telegraph Avenue, Oakland",
      city: "Oakland",
      phone: "(510) 652-4888",
      description: "",
      website: "http://www.pizzaiolooakland.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Boot & Shoe Service",
      address: "3308 Grand Avenue, Oakland",
      city: "Oakland",
      phone: "(510) 763-2668",
      description: "",
      website: "http://bootandshoeservice.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Pizza Matador",
      address: "Delivery Only",
      city: "Oakland",
      phone: "(510) 394-5422",
      description: "",
      website: "http://www.pizzamatador.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Fist of Flour Pizza Company Doughjo",
      address: "4166 MacArthur Boulevard, Oakland",
      city: "Oakland",
      phone: "(510) 531-6367",
      description: "",
      website: "http://wheresthefist.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Marzano",
      address: "4214 Park Boulevard, Oakland",
      city: "Oakland",
      phone: "(510) 479-1448",
      description: "",
      website: "http://www.marzanorestaurant.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Nick’s Pizza",
      address: "6211 Shattuck Avenue, Oakland",
      city: "Oakland",
      phone: "(510) 658-3903",
      description: "",
      website: "http://oaklandstylepizza.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "A16",
      address: "2355 Chestnut Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 771-2216",
      description: "",
      website: "http://www.a16sf.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Cheese Board Pizza",
      address: "1512 Shattuck Avenue, Berkeley",
      city: "Berkeley",
      phone: "(510) 549-3183",
      description: "",
      website: "http://cheeseboardcollective.coop/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Emilia's Pizzeria",
      address: "2995 Shattuck Avenue, Berkeley",
      city: "Berkeley",
      phone: "(510) 704-1794",
      description: "",
      website: "http://www.emiliaspizzeria.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Gaspare's Pizza",
      address: "5546 Geary Boulevard, San Francisco",
      city: "San Francisco",
      phone: "(415) 387-5025",
      description: "",
      website: "http://www.gasparespizzeria.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Piccino Cafe",
      address: "1001 Minnesota Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 824-4224",
      description: "",
      website: "http://www.piccino.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "All Good Pizza",
      address: "1605 Jerrold Avenue, San Francisco",
      city: "San Francisco",
      phone: "(415) 933-9384",
      description: "",
      website: "http://allgoodpizza.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Pizza Orgasmica",
      address: "2 Embarcadero Center, San Francisco",
      city: "San Francisco",
      phone: "(415) 834-9600",
      description: "",
      website: "http://www.gocheespizza.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Mythic",
      address: "551 Haight Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 864-1999",
      description: "",
      website: "http://mythicpizza.net/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Nob Hill Cafe",
      address: "1152 Taylor Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 776-6500",
      description: "",
      website: "http://www.nobhillcafe.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Haystack",
      address: "3881 24th Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 647-1929",
      description: "",
      website: "http://haystackpizzasf.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Bellissimo Pizza",
      address: "920 Sutter Street, San Francisco",
      city: "San Francisco",
      phone: "(415) 885-4445",
      description: "",
      website: "http://www.bellissimopizzamenu.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Lanesplitter",
      address: "4799 Telegraph Avenue, Oakland",
      city: "Oakland",
      phone: "(510) 653-5350",
      description: "",
      website: "http://www.lanesplitterpizza.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Slicer",
      address: "4395 Piedmont Avenue, Oakland",
      city: "San Francisco",
      phone: "(510) 808-5424",
      description: "",
      website: "http://slicerpizzeria.com/",
      pic: "",
      lat: 0,
      long: 0
    },
    {
      name: "Forge Pizza",
      address: "66 Franklin St, Oakland",
      city: "Oakland",
      phone: "(510) 268-3200",
      description: "",
      website: "http://theforgepizza.com",
      pic: "",
      lat: 0,
      long: 0
    }
  ];

Place.create(places, function(err, places){
  if(err){
    console.log(err);
  } else {

    var lilstar = places[0]._id;
    var arinell = places[1]._id;
    var beretta = places[2]._id;
    var delar = places[3]._id;
    var capo = places[4]._id;
    var delfina = places[5]._id;
    var popolo = places[6]._id;
    var gialina = places[7]._id;
    var jayn = places[8]._id;
    var jersey = places[9]._id;
    var mozz = places[10]._id;
    var pauline = places[11]._id;
    var hacker = places[12]._id;
    var shop = places[13]._id;
    var pizzetta = places[14]._id;
    var tonys = places[15]._id;
    var una = places[16]._id;
    var zante = places[17]._id;
    var zero = places[18]._id;
    var avellino = places[19]._id;
    var flour = places[20]._id;
    var giorgios = places[21]._id;
    var gioia = places[22]._id;
    var marcello = places[23]._id;
    var patxi = places[24]._id;
    var ragazza = places[25]._id;
    var tommaso = places[26]._id;
    var carmel = places[27]._id;
    var golden = places[28]._id;
    var montesacro = places[29]._id;
    var casaro = places[30]._id;
    var arizsf = places[31]._id;
    var arizoak = places[32]._id;
    var amazona = places[33]._id;
    var stargrand = places[34]._id;
    var zach = places[35]._id;
    var pizzaiolo = places[36]._id;
    var boot = places[37]._id;
    var doughjo = places[38]._id;
    var matador = places[39]._id;
    var marzano = places[40]._id;
    var nicks = places[41]._id;
    var a16 = places[42]._id;
    var board = places[43]._id;
    var emilias = places[44]._id;
    var gaspere = places[45]._id;
    var piccino = places[46]._id;
    var allgood = places[47]._id;
    var orgasm = places[48]._id;
    var mythic = places[49]._id;
    var nob = places[50]._id;
    var haystack = places[51]._id;
    var bellissimo = places[52]._id;
    var lane = places[53]._id;
    var slicer = places[54]._id;
    var forge = places[55]._id;

    console.log("created: ", places);
    //create lists after places so can ref
    var lists = [
         {
           name: "SFist Guide",
           city: "San Francisco",
           url: "http://sfist.com/2015/09/17/the_best_pizza_in_san_francisco.php",
           places: [lilstar, arinell, beretta, delar, capo,
                    delfina, popolo, gialina, jayn, jersey, mozz,
                    pauline, hacker, shop, pizzetta, tonys, una,
                    zante, zero, avellino, flour, giorgios, gioia,
                    marcello, patxi, ragazza, tommaso]
         },
         {
           name: "Yelp SF Top 10",
           city: "San Francisco",
           url: "http://www.yelp.com/search?find_desc=Best+Pizza&find_loc=San+Francisco%2C+CA",
           places: [lilstar, delfina, shop, pizzetta, tonys, carmel, golden,
                    montesacro, casaro, arizsf]
         },
         {
           name: "Yelp Oakland Top 10",
           city: "Oakland",
           url: "http://www.yelp.com/search?find_desc=Best+Pizza&find_loc=Oakland,+CA",
           places: [arizoak, amazona, stargrand, zach, pizzaiolo, boot, matador,
                    doughjo, marzano, nicks]
         },
         {
           name: "Eater SF Top 25",
           city: "San Francisco",
           url: "http://sf.eater.com/maps/san-franciscos-25-most-iconic-pizzerias",
           places: [lilstar, arinell, delfina, popolo, gialina, pauline, hacker,
                    pizzetta, tonys, una, zante, zero, flour, gioia, marcello,
                    tommaso, golden, arizsf, zach, pizzaiolo, a16, board, emilias,
                    gaspere, piccino]
         },
         {
           name: "Thrillist Top Pizzas",
           city: "San Francisco",
           url: "https://www.thrillist.com/eat/san-francisco/the-best-sf-pizzas-by-hood-thrillist-san-francisco",
           places: [delar, delfina, hacker, pizzetta, tonys, una, flour, gioia,
                    marcello, ragazza, carmel, arizsf, piccino, allgood, orgasm,
                    mythic, nob, haystack, bellissimo]
         },
         {
           name: "Bold Italic Oakland Pizza",
           city: "Oakland",
           url: "www.thebolditalic.com/articles/4693-read-this-if-youre-obsessed-with-oaklands-pizza",
           places: [zach, pizzaiolo, boot, doughjo, nicks, lane, slicer, forge]
         }
       ];
       List.create(lists, function(err, lists){
         if(err){
           console.log("Error: ", err);
         } else {
           console.log("created: ", lists);
           mongoose.connection.close();
         }
       });
     }
  });
