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

type Command = {
  name: string,
  description: string,
  type:
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
};

export type Commands = Array<Command>;
