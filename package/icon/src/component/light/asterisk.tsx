
import { Icon } from "../../index";

/**
 * A component that renders the `asterisk` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/asterisk?s=light asterisk}
 * @preview ![asterisk](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkyIDMyYzguOCAwIDE2IDcuMiAxNiAxNmwwIDE3OC45IDE1MS40LTk2LjRjNy41LTQuNyAxNy4zLTIuNSAyMi4xIDQuOXMyLjUgMTcuMy00LjkgMjIuMUwyMjEuOCAyNTZsMTU0LjggOTguNWM3LjUgNC43IDkuNyAxNC42IDQuOSAyMi4xcy0xNC42IDkuNy0yMi4xIDQuOUwyMDggMjg1LjEgMjA4IDQ2NGMwIDguOC03LjIgMTYtMTYgMTZzLTE2LTcuMi0xNi0xNmwwLTE3OC45TDI0LjYgMzgxLjVjLTcuNSA0LjctMTcuMyAyLjUtMjIuMS00LjlzLTIuNS0xNy4zIDQuOS0yMi4xTDE2Mi4yIDI1NiA3LjQgMTU3LjVjLTcuNS00LjctOS43LTE0LjYtNC45LTIyLjFzMTQuNi05LjcgMjIuMS00LjlMMTc2IDIyNi45IDE3NiA0OGMwLTguOCA3LjItMTYgMTYtMTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Asterisk: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 32c8.8 0 16 7.2 16 16l0 178.9 151.4-96.4c7.5-4.7 17.3-2.5 22.1 4.9s2.5 17.3-4.9 22.1L221.8 256l154.8 98.5c7.5 4.7 9.7 14.6 4.9 22.1s-14.6 9.7-22.1 4.9L208 285.1 208 464c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-178.9L24.6 381.5c-7.5 4.7-17.3 2.5-22.1-4.9s-2.5-17.3 4.9-22.1L162.2 256 7.4 157.5c-7.5-4.7-9.7-14.6-4.9-22.1s14.6-9.7 22.1-4.9L176 226.9 176 48c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default Asterisk;