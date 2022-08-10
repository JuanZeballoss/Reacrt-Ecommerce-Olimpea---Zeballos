const stockProducts = [{
  "id": 1,
  "title": "Eros",
  "price": 67,
  "category": "Drama",
  "country": "Philippines",
  "img": "http://dummyimage.com/280x260.png/dddddd/000000",
  "stock": 1,
  "outDate": "3/21/2021",
  "principalActor": "Rafaello State",
  "duration": "1:18:43 ",
  "secondaryActor": "Erskine Loncaster",
  "description": `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Veritatis reiciendis fugit dolores rerum porro, quaerat 
                  distinctio id perspiciatis ad itaque impedit dolore praesentium 
                  odit nam consequatur et sunt incidunt natus`
}, {
  "id": 2,
  "title": "Grocer's Son, The (Fils de l'épicier, Le)",
  "price": 65,
  "category": "Drama|Romance",
  "country": "Honduras",
  "img": "http://dummyimage.com/280x260.png/cc0000/ffffff",
  "stock": 20,
  "outDate": "10/23/2019",
  "principalActor": "Dorey Gundry",
  "duration": "1:26:08 ",
  "secondaryActor": "Corrie Anderl",
  "description": `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Veritatis reiciendis fugit dolores rerum porro, quaerat 
                  distinctio id perspiciatis ad itaque impedit dolore praesentium 
                  odit nam consequatur et sunt incidunt natus`
}, {
  "id": 3,
  "title": "Mother (Mat)",
  "price": 35,
  "category": "Drama",
  "country": "Malaysia",
  "img": "http://dummyimage.com/280x260.png/5fa2dd/ffffff",
  "stock": 6,
  "outDate": "4/13/2019",
  "principalActor": "Ange Waywell",
  "duration": "2:51:18 ",
  "secondaryActor": "Dun Rapaport",
  "description": `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Veritatis reiciendis fugit dolores rerum porro, quaerat 
                  distinctio id perspiciatis ad itaque impedit dolore praesentium 
                  odit nam consequatur et sunt incidunt natus`
}, {
  "id": 4,
  "title": "Legend of the Lone Ranger, The",
  "price": 12,
  "category": "Western",
  "country": "Cyprus",
  "img": "http://dummyimage.com/280x260.png/5fa2dd/ffffff",
  "stock": 11,
  "outDate": "2/13/2020",
  "principalActor": "Janel Blaydon",
  "duration": "2:10:44 ",
  "secondaryActor": "Doralyn Thirkettle",
  "description": `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Veritatis reiciendis fugit dolores rerum porro, quaerat 
                  distinctio id perspiciatis ad itaque impedit dolore praesentium 
                  odit nam consequatur et sunt incidunt natus`
}, {
  "id": 5,
  "title": "In Therapy (Divã)",
  "price": 92,
  "category": "Comedy|Drama|Romance",
  "country": "Czech Republic",
  "img": "http://dummyimage.com/280x260.png/dddddd/000000",
  "stock": 7,
  "outDate": "2/12/2021",
  "principalActor": "Traci Broadhead",
  "duration": "1:06:59 ",
  "secondaryActor": "Oren Adamolli",
  "description": `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Veritatis reiciendis fugit dolores rerum porro, quaerat 
                  distinctio id perspiciatis ad itaque impedit dolore praesentium 
                  odit nam consequatur et sunt incidunt natus`
}, {
  "id": 6,
  "title": "White Night (Hvid nat)",
  "price": 51,
  "category": "Drama",
  "country": "Russia",
  "img": "http://dummyimage.com/280x260.png/ff4444/ffffff",
  "stock": 10,
  "outDate": "9/1/2019",
  "principalActor": "Jessie Stappard",
  "duration": "2:20:02 ",
  "secondaryActor": "Hermie Leggan",
  "description": `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Veritatis reiciendis fugit dolores rerum porro, quaerat 
                  distinctio id perspiciatis ad itaque impedit dolore praesentium 
                  odit nam consequatur et sunt incidunt natus`
}, {
  "id": 7,
  "title": "Solitude of Prime Numbers, The",
  "price": 2,
  "category": "Drama",
  "country": "Russia",
  "img": "http://dummyimage.com/280x260.png/ff4444/ffffff",
  "stock": 20,
  "outDate": "4/22/2018",
  "principalActor": "Dill Chilcotte",
  "duration": "1:32:49 ",
  "secondaryActor": "Hestia Fenwick",
  "description": `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Veritatis reiciendis fugit dolores rerum porro, quaerat 
                  distinctio id perspiciatis ad itaque impedit dolore praesentium 
                  odit nam consequatur et sunt incidunt natus`
}, {
  "id": 8,
  "title": "Beach Girls and the Monster, The",
  "price": 91,
  "category": "Horror",
  "country": "Indonesia",
  "img": "http://dummyimage.com/280x260.png/dddddd/000000",
  "stock": 3,
  "outDate": "2/14/2020",
  "principalActor": "Dianemarie Gawne",
  "duration": "2:17:35 ",
  "secondaryActor": "Antoine Gylle",
  "description": `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Veritatis reiciendis fugit dolores rerum porro, quaerat 
                  distinctio id perspiciatis ad itaque impedit dolore praesentium 
                  odit nam consequatur et sunt incidunt natus`
}, {
  "id": 9,
  "title": "Jude the Obscure",
  "price": 39,
  "category": "Drama",
  "country": "Philippines",
  "img": "http://dummyimage.com/280x260.png/dddddd/000000",
  "stock": 2,
  "outDate": "6/1/2020",
  "principalActor": "Lebbie Verrell",
  "duration": "2:29:21 ",
  "secondaryActor": "Jourdan Seiter",
  "description": `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Veritatis reiciendis fugit dolores rerum porro, quaerat 
                  distinctio id perspiciatis ad itaque impedit dolore praesentium 
                  odit nam consequatur et sunt incidunt natus`
}, {
  "id": 10,
  "title": "Shadow Riders, The",
  "price": 32,
  "category": "Romance|Western",
  "country": "China",
  "img": "http://dummyimage.com/280x260.png/dddddd/000000",
  "stock": 8,
  "outDate": "4/26/2019",
  "principalActor": "Kelcie Blouet",
  "duration": "2:50:21 ",
  "secondaryActor": "Byrann Kuhlen",
  "description": `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Veritatis reiciendis fugit dolores rerum porro, quaerat 
  distinctio id perspiciatis ad itaque impedit dolore praesentium 
  odit nam consequatur et sunt incidunt natus`
}]
export default stockProducts