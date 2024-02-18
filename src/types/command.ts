import type { Message } from "./message.ts";

export enum CommandType {
  CHAT_INPUT = 1, // Slash commands; a text-based command that shows up when a user types /
  USER, // A UI-based command that shows up when you right click or tap on a user
  MESSAGE, //A UI-based command that shows up when you right click or tap on a message
};

export enum OptionType {
  SUB_COMMAND = 1,   // = 1
  SUB_COMMAND_GROUP, // = 2
  STRING,            // = 3
  INTEGER,           // = 4 Any integer between -2^53 and 2^53
  BOOLEAN,           // = 5
  USER,              // = 6
  CHANNEL,           // = 7 Includes all channel types + categories
  ROLE,              // = 8
  MENTIONABLE,       // = 9 Includes users and roles
  NUMBER,            // = 10 Any double between -2^53 and 2^53
  ATTACHMENT,        // = 11
};

export type Commands = Array<{
  name: string,
  description: string,
  type: CommandType,
  nsfw?: boolean,
  options: [
    {
      type: OptionType,
      name: string,
      description: string,
      required?: boolean, // = false
      choices?: Array<{
        name: string,
        value: string | numbe,
      }>
    }
  ]
}>;

export enum InteractionType {
  PING = 1,
  APPLICATION_COMMAND,
  MESSAGE_COMPONENT,
  APPLICATION_COMMAND_AUTOCOMPLETE,
  MODAL_SUBMIT,
};

export type InteractionOption = {
  name: string,
  type: OptionType,
  value?: string | number | boolean,
  focused?: boolean, // true if this option is the currently focused option for autocomplete
};

// https://discord.com/developers/docs/interactions/application-commands#user-commands-example-interaction
export type Interaction = {
  type: InteractionType,
  data: {
    name: string,
    options?: Array<InteractionOptions>,
  },
};

export enum InteractionCallbackType {
  PONG = 1, // ACK a Ping
  CHANNEL_MESSAGE_WITH_SOURCE = 4, // respond to an interaction with a message
  DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE, // 5 ACK an interaction and edit a response later, the user sees a loading state
  DEFERRED_UPDATE_MESSAGE, // 6 for components, ACK an interaction and edit the original message later; the user does not see a loading state
  UPDATE_MESSAGE, // 7 for components, edit the message the component was attached to
  APPLICATION_COMMAND_AUTOCOMPLETE_RESULT, // 8 respond to an autocomplete interaction with suggested choices
  MODAL, // 9 respond to an interaction with a popup modal
  PREMIUM_REQUIRED, // 10 respond to an interaction with an upgrade button, only available for apps with monetization enabled
};

export type InteractionResponse = {
  type: InteractionCallbackType,
  data?: Message,
};

export type InteractionFunction = (inter: Interaction) => InteractionResponse;
