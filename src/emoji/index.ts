import { Commands, OptionType, InteractionCallbackType, CommandResponse, InteractionFunction } from "types/command";

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

const emoji: InteractionFunction = (inter): CommandResponse => {
  if(inter.data.name = "emoji") {
    return {
      type: InteractionCallbackType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "test",
      }
    }
  }
};

export default emoji;
