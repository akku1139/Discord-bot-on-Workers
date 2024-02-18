import { Commands, OptionType } from "types/commands";

export const commands: Commands = [
  {
    name: "emoji",
    description: "Misskeyサーバーから絵文字を取得します",
    options: [
      {
        type: OptionType.STRING,
        name: "name",
        description: "絵文字名",
        required: true,
      },
      {
        type: OptionType.STRING,
        name: "server",
        description: "サーバー (misskey.io)",
        required: false,
      }
    ]
  }
];

export default emoji = () => {

};
