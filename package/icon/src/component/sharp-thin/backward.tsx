
import { Icon } from "../../index";

/**
 * A component that renders the `backward` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward?s=sharp-thin backward}
 * @preview ![backward](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTQuNCAyNjUuNkwwIDI1NmwxNC40LTkuNkwyNzIgNzQuNyAyODggNjRsMCAxOS4yIDAgMTE1LjJMNDk2IDczLjYgNTEyIDY0bDAgMTguNyAwIDM0Ni43IDAgMTguNy0xNi05LjZMMjg4IDMxMy42bDAgMTE1LjIgMCAxOS4yLTE2LTEwLjdMMTQuNCAyNjUuNnpNMjg4IDI5NC45TDQ5NiA0MTkuN2wwLTMyNy41TDI4OCAyMTcuMWwwIDc3Ljl6TTI3MiA0MTguMWwwLTMyNC4yTDI4LjggMjU2IDI3MiA0MTguMXoiLz48L3N2Zz4=|width=32|height=32)
 */
const Backward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M14.4 265.6L0 256l14.4-9.6L272 74.7 288 64l0 19.2 0 115.2L496 73.6 512 64l0 18.7 0 346.7 0 18.7-16-9.6L288 313.6l0 115.2 0 19.2-16-10.7L14.4 265.6zM288 294.9L496 419.7l0-327.5L288 217.1l0 77.9zM272 418.1l0-324.2L28.8 256 272 418.1z" />
    </Icon>
);

export default Backward;