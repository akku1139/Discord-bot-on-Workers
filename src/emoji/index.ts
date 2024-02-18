import { Commands, OptionType, Interaction, InteractionCallbackType, InteractionResponse, InteractionFunction } from "types/command.ts";
import { parseOptions } from "utils/option.ts";

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

const emoji: InteractionFunction = (inter: Interaction): InteractionResponse => {
  const options = parseOptions(inter.data.options)
  if(inter.data.name = "emoji") {
    return {
      type: InteractionCallbackType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: `https://${ options.server ? options.server.value : "misskey.io"}/emoji/${options.name.value}.webp`,
      }
    }
  }
};

export default emoji;
