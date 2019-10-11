
feats =[
grappler = {name:"grappler",
              statRequirement:[ "str" , 13 ],
              discription:"You’ve developed the skills necessary to hold your own in close-quarters grappling. You gain the following benefits:"+
              " You have advantage on attack rolls against a creature you are grappling."+
              " You can use your action to try to pin a creature grappled by you. To do so, make another grapple check. If you succeed, you and"+
              " the creature are both restrained until the grapple ends.",
              statIncrease:[],
              proficiencyBonus:[]
            },
actor = {name:"actor",
            statRequirement:[],
            discription:"Skilled at mimicry and dramatics, you gain the following benefits:"+
            " Increase your Charisma score by 1, to a maximum of 20."+
            " You have an advantage on Charisma (Deception) and Charisma (Performance) checks when trying to pass yourself off as a different person."+
            " You can mimic the speech of another person or the sounds made by other creatures. You must have heard the person speaking, or heard the"+
            " creature make the sound, for at least 1 minute. A successful Wisdom (Insight) check contested by your Charisma (Deception) check allows"+
            " a listener to determine that the effect is faked.",
            statIncrease:["cha",1],
            proficiencyBonus:[]
          }
];

exports.feats = feats;
