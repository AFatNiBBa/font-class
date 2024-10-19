
import { Icon } from "../../index";

/**
 * A component that renders the `people-group` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-group?s=thin people-group}
 * @preview ![people-group](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNODggODhhNDAgNDAgMCAxIDEgODAgMEE0MCA0MCAwIDEgMSA4OCA4OHptOTYgMEE1NiA1NiAwIDEgMCA3MiA4OGE1NiA1NiAwIDEgMCAxMTIgMHptMjg4IDBhNDAgNDAgMCAxIDEgODAgMCA0MCA0MCAwIDEgMSAtODAgMHptOTYgMEE1NiA1NiAwIDEgMCA0NTYgODhhNTYgNTYgMCAxIDAgMTEyIDB6TTY0IDI1NmMtNC40IDAtOCAzLjYtOCA4bDAgOTguMmMtMjQuMi0xNi45LTQwLTQ1LTQwLTc2LjdjMC01MS43IDQxLjktOTMuNSA5My41LTkzLjVsMzYuOSAwYzE4LjggMCAzNi4zIDUuNiA1MSAxNS4xYzMuNy00IDcuNi03LjggMTEuNy0xMS40Yy0xNy44LTEyLjQtMzkuNC0xOS43LTYyLjctMTkuN2wtMzYuOSAwQzQ5IDE3NiAwIDIyNSAwIDI4NS41YzAgNDEuMSAyMi42IDc2LjggNTYgOTUuNkw1NiA0MzJjMCAxNy43IDE0LjMgMzIgMzIgMzJsODAgMGMxNy43IDAgMzItMTQuMyAzMi0zMmwwLTI4LjRjLTUuOS02LjItMTEuMy0xMi44LTE2LTIwbDAgNDguNGMwIDguOC03LjIgMTYtMTYgMTZsLTgwIDBjLTguOCAwLTE2LTcuMi0xNi0xNmwwLTE2OGMwLTQuNC0zLjYtOC04LTh6TTQ0MCA0MzJjMCAxNy43IDE0LjMgMzIgMzIgMzJsODAgMGMxNy43IDAgMzItMTQuMyAzMi0zMmwwLTUwLjljMzMuNC0xOC43IDU2LTU0LjUgNTYtOTUuNkM2NDAgMjI1IDU5MSAxNzYgNTMwLjUgMTc2bC0zNi45IDBjLTIzLjMgMC00NC45IDcuMy02Mi43IDE5LjdjNC4xIDMuNiA4IDcuNCAxMS43IDExLjRjMTQuNy05LjYgMzIuMi0xNS4xIDUxLTE1LjFsMzYuOSAwYzUxLjcgMCA5My41IDQxLjkgOTMuNSA5My41YzAgMzEuNy0xNS44IDU5LjgtNDAgNzYuN2wwLTk4LjJjMC00LjQtMy42LTgtOC04cy04IDMuNi04IDhsMCAxNjhjMCA4LjgtNy4yIDE2LTE2IDE2bC04MCAwYy04LjggMC0xNi03LjItMTYtMTZsMC00OC40Yy00LjcgNy4xLTEwLjEgMTMuOC0xNiAyMGwwIDI4LjR6TTI3MiA5NmE0OCA0OCAwIDEgMSA5NiAwIDQ4IDQ4IDAgMSAxIC05NiAwem0xMTIgMEE2NCA2NCAwIDEgMCAyNTYgOTZhNjQgNjQgMCAxIDAgMTI4IDB6TTI1NiAyNzJjLTQuNCAwLTggMy42LTggOGwwIDk4LjJjLTI0LjItMTYuOS00MC00NS00MC03Ni43YzAtNTEuNyA0MS45LTkzLjUgOTMuNS05My41bDM2LjkgMGM1MS43IDAgOTMuNSA0MS45IDkzLjUgOTMuNWMwIDMxLjctMTUuOCA1OS44LTQwIDc2LjdsMC05OC4yYzAtNC40LTMuNi04LTgtOHMtOCAzLjYtOCA4bDAgMTY4YzAgOC44LTcuMiAxNi0xNiAxNmwtODAgMGMtOC44IDAtMTYtNy4yLTE2LTE2bDAtMTY4YzAtNC40LTMuNi04LTgtOHptLTggMTI1LjFsMCA1MC45YzAgMTcuNyAxNC4zIDMyIDMyIDMybDgwIDBjMTcuNyAwIDMyLTE0LjMgMzItMzJsMC01MC45YzMzLjQtMTguNyA1Ni01NC41IDU2LTk1LjZDNDQ4IDI0MSAzOTkgMTkyIDMzOC41IDE5MmwtMzYuOSAwQzI0MSAxOTIgMTkyIDI0MSAxOTIgMzAxLjVjMCA0MS4xIDIyLjYgNzYuOCA1NiA5NS42eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PeopleGroup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M88 88a40 40 0 1 1 80 0A40 40 0 1 1 88 88zm96 0A56 56 0 1 0 72 88a56 56 0 1 0 112 0zm288 0a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm96 0A56 56 0 1 0 456 88a56 56 0 1 0 112 0zM64 256c-4.4 0-8 3.6-8 8l0 98.2c-24.2-16.9-40-45-40-76.7c0-51.7 41.9-93.5 93.5-93.5l36.9 0c18.8 0 36.3 5.6 51 15.1c3.7-4 7.6-7.8 11.7-11.4c-17.8-12.4-39.4-19.7-62.7-19.7l-36.9 0C49 176 0 225 0 285.5c0 41.1 22.6 76.8 56 95.6L56 432c0 17.7 14.3 32 32 32l80 0c17.7 0 32-14.3 32-32l0-28.4c-5.9-6.2-11.3-12.8-16-20l0 48.4c0 8.8-7.2 16-16 16l-80 0c-8.8 0-16-7.2-16-16l0-168c0-4.4-3.6-8-8-8zM440 432c0 17.7 14.3 32 32 32l80 0c17.7 0 32-14.3 32-32l0-50.9c33.4-18.7 56-54.5 56-95.6C640 225 591 176 530.5 176l-36.9 0c-23.3 0-44.9 7.3-62.7 19.7c4.1 3.6 8 7.4 11.7 11.4c14.7-9.6 32.2-15.1 51-15.1l36.9 0c51.7 0 93.5 41.9 93.5 93.5c0 31.7-15.8 59.8-40 76.7l0-98.2c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 168c0 8.8-7.2 16-16 16l-80 0c-8.8 0-16-7.2-16-16l0-48.4c-4.7 7.1-10.1 13.8-16 20l0 28.4zM272 96a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm112 0A64 64 0 1 0 256 96a64 64 0 1 0 128 0zM256 272c-4.4 0-8 3.6-8 8l0 98.2c-24.2-16.9-40-45-40-76.7c0-51.7 41.9-93.5 93.5-93.5l36.9 0c51.7 0 93.5 41.9 93.5 93.5c0 31.7-15.8 59.8-40 76.7l0-98.2c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 168c0 8.8-7.2 16-16 16l-80 0c-8.8 0-16-7.2-16-16l0-168c0-4.4-3.6-8-8-8zm-8 125.1l0 50.9c0 17.7 14.3 32 32 32l80 0c17.7 0 32-14.3 32-32l0-50.9c33.4-18.7 56-54.5 56-95.6C448 241 399 192 338.5 192l-36.9 0C241 192 192 241 192 301.5c0 41.1 22.6 76.8 56 95.6z" />
    </Icon>
);

export default PeopleGroup;