import "app/styles/index.scss";
import { StoryFn } from "@storybook/react";

export const StyleDecorator = (story: () => StoryFn) => story();
// export const withPinkDecorator: Decorator = (Story) => (
//   <div
//     style={{
//       backgroundColor: "pink",
//       padding: "1rem",
//       display: "inline-block",
//     }}
//   >
//     <Story />
//   </div>
// );
