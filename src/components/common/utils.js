import moment from "moment";
import Constants from "./constants";

export default class Utils {
  static processData(rawData, year) {
    let data = {};
    if (!rawData || !Array.isArray(rawData) || rawData.length <= 0)
      throw new Error(`Couldn't find array`);

    let sortData = rawData.sort((a, b) => {
      return moment.utc(b.birthday).diff(moment.utc(a.birthday));
    });

    for (let item of sortData) {
      if (!item.name || !item.birthday) {
        throw new Error(`Missing Fields ${JSON.stringify(item)}`);
      }

      const { name, birthday } = item;
      let momentObj = moment(birthday, ["YYYY-MM-DD", "MM/DD/YYYY"]);

      if (momentObj.year() > year) {
        console.log("Dude, you are not born yet!");
        continue;
      }

      let spaceIndex = name.trim().lastIndexOf(" ");
      let initials = `${name[0]}${
        spaceIndex !== -1 ? name[spaceIndex + 1] : ""
      }`;

      if (momentObj.isValid() === false) {
        throw new Error(`Invalid birthdate ${JSON.stringify(item)}`);
      }
      momentObj.set("year", year);
      let day = momentObj.format("dddd");
      if (data[Constants.DAYS[day]]) {
        data[Constants.DAYS[day]].push(initials);
      } else {
        data[Constants.DAYS[day]] = [initials];
      }
    }
    return data;
  }

  static colorGenerator() {
    return (
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
    );
  }
}
