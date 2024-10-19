
import { Icon } from "../../index";

/**
 * A component that renders the `nesting-dolls` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nesting-dolls?s=thin nesting-dolls}
 * @preview ![nesting-dolls](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNODAgMTI4bDAgOTYtMTYgMCAwLTk2QzY0IDU3LjMgMTIxLjMgMCAxOTIgMHMxMjggNTcuMyAxMjggMTI4bDAgOTYtMTYgMCAwLTk2YzAtNjEuOS01MC4xLTExMi0xMTItMTEyUzgwIDY2LjEgODAgMTI4ek0xOTAuNyA3MmMtMS4zIDAtMi4xIC41LTIuMyAuOWMtMTUuNyAyMC40LTQwLjMgMzMuNy02Ny45IDM0LjJjNy4zIDMyLjEgMzYgNTYgNzAuMiA1NnM2My0yMy45IDcwLjItNTZjLTI3LjYtLjUtNTIuMS0xMy44LTY3LjktMzQuMmMtLjItLjMtMS0uOS0yLjMtLjl6bTAtMTZjNS4zIDAgMTEuMiAyLjEgMTUgNy4xYzEzLjIgMTcuMSAzMy44IDI4IDU3IDI4YzcuOSAwIDE2LjMgNi45IDE0LjQgMTYuN2MtNy44IDQwLjYtNDMuNSA3MS4zLTg2LjQgNzEuM3MtNzguNi0zMC43LTg2LjQtNzEuM2MtMS45LTkuOSA2LjUtMTYuNyAxNC40LTE2LjdjMjMuMiAwIDQzLjgtMTEgNTctMjhjMy44LTUgOS43LTcuMSAxNS03LjF6TTQ2NCAzMjQuOWMtMS4zIDAtMi4xIC41LTIuMyAuOWMtMTUuNyAyMC40LTQwLjMgMzMuNy02Ny45IDM0LjJjNy4zIDMyLjEgMzYgNTYgNzAuMiA1NnM2My0yMy45IDcwLjItNTZjLTI3LjYtLjYtNTIuMS0xMy44LTY3LjktMzQuMmMtLjItLjMtMS0uOS0yLjMtLjl6bTAtMTZjNS4zIDAgMTEuMiAyLjEgMTUgNy4xYzEzLjIgMTcuMSAzMy44IDI4IDU3IDI4YzcuOSAwIDE2LjMgNi45IDE0LjQgMTYuN0M1NDIuNiA0MDEuMyA1MDYuOSA0MzIgNDY0IDQzMnMtNzguNi0zMC43LTg2LjQtNzEuM2MtMS45LTkuOSA2LjUtMTYuNyAxNC40LTE2LjdjMjMuMiAwIDQzLjgtMTEgNTctMjhjMy44LTUgOS43LTcuMSAxNS03LjF6TTYyMi40IDQ4My4yYy03LjctMTEuMS0xMy44LTIyLjktMTkuMS0zNC41QzU5MC40IDQyMC40IDU4NCAzOTEgNTg0IDM2MGMwLTY2LjMtNTMuNy0xMjAtMTIwLTEyMHMtMTIwIDUzLjctMTIwIDEyMGMwIDMxLTYuNCA2MC40LTE5LjMgODguN2MtNS4zIDExLjYtMTEuNCAyMy40LTE5LjEgMzQuNWwtLjEgLjFzMCAwIDAgMGMwIDAgMCAwIDAgMGMwIDAgMCAuMS0uMSAuMWMtMS43IDIuNC0yIDUuNi0uNiA4LjNzNC4xIDQuMyA3LjEgNC4zbDMwNCAwYzMgMCA1LjctMS43IDcuMS00LjNzMS4xLTUuOS0uNi04LjNsLS4xLS4yczAgMCAwIDB6TTI5MC43IDQ5OWMtNC4xLTgtMy40LTE3LjYgMS44LTI0LjljMCAwIDAgMCAwIDBjNy0xMCAxMi42LTIwLjkgMTcuNy0zMkMzMjIuMSA0MTUuOSAzMjggMzg4LjcgMzI4IDM2MGMwLTc1LjEgNjAuOS0xMzYgMTM2LTEzNnMxMzYgNjAuOSAxMzYgMTM2YzAgMjguNyA1LjkgNTUuOSAxNy44IDgyLjFjNSAxMS4xIDEwLjcgMjIgMTcuNyAzMmM1LjIgNy4zIDUuOSAxNi45IDEuOCAyNC45cy0xMi40IDEzLTIxLjMgMTNsLTMwNCAwYy05IDAtMTcuMi01LTIxLjMtMTN6bS0zNC4xLTNjLjggNS41IDIuNCAxMC45IDQuOCAxNkw3NC41IDUxMmMtMTcgMC0zMy40LTYuNy00Mi43LTIwLjlDMTcuOSA0NjkuNyAwIDQzMi44IDAgMzg0YzAtNDQuNCAyMC4yLTg0LjQgMzcuOS0xMTkuNGMyLjctNS4zIDguMS04LjYgMTQtOC42bDI4MC4yIDBjLTQgNS4xLTcuOCAxMC40LTExLjIgMTZMNTIuMSAyNzJDMzQuMSAzMDcuNSAxNiAzNDQuMSAxNiAzODRjMCA0NC44IDE2LjQgNzguNyAyOS4yIDk4LjNjNS42IDguNiAxNi4yIDEzLjcgMjkuMyAxMy43bDE4Mi4xIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const NestingDolls: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M80 128l0 96-16 0 0-96C64 57.3 121.3 0 192 0s128 57.3 128 128l0 96-16 0 0-96c0-61.9-50.1-112-112-112S80 66.1 80 128zM190.7 72c-1.3 0-2.1 .5-2.3 .9c-15.7 20.4-40.3 33.7-67.9 34.2c7.3 32.1 36 56 70.2 56s63-23.9 70.2-56c-27.6-.5-52.1-13.8-67.9-34.2c-.2-.3-1-.9-2.3-.9zm0-16c5.3 0 11.2 2.1 15 7.1c13.2 17.1 33.8 28 57 28c7.9 0 16.3 6.9 14.4 16.7c-7.8 40.6-43.5 71.3-86.4 71.3s-78.6-30.7-86.4-71.3c-1.9-9.9 6.5-16.7 14.4-16.7c23.2 0 43.8-11 57-28c3.8-5 9.7-7.1 15-7.1zM464 324.9c-1.3 0-2.1 .5-2.3 .9c-15.7 20.4-40.3 33.7-67.9 34.2c7.3 32.1 36 56 70.2 56s63-23.9 70.2-56c-27.6-.6-52.1-13.8-67.9-34.2c-.2-.3-1-.9-2.3-.9zm0-16c5.3 0 11.2 2.1 15 7.1c13.2 17.1 33.8 28 57 28c7.9 0 16.3 6.9 14.4 16.7C542.6 401.3 506.9 432 464 432s-78.6-30.7-86.4-71.3c-1.9-9.9 6.5-16.7 14.4-16.7c23.2 0 43.8-11 57-28c3.8-5 9.7-7.1 15-7.1zM622.4 483.2c-7.7-11.1-13.8-22.9-19.1-34.5C590.4 420.4 584 391 584 360c0-66.3-53.7-120-120-120s-120 53.7-120 120c0 31-6.4 60.4-19.3 88.7c-5.3 11.6-11.4 23.4-19.1 34.5l-.1 .1s0 0 0 0c0 0 0 0 0 0c0 0 0 .1-.1 .1c-1.7 2.4-2 5.6-.6 8.3s4.1 4.3 7.1 4.3l304 0c3 0 5.7-1.7 7.1-4.3s1.1-5.9-.6-8.3l-.1-.2s0 0 0 0zM290.7 499c-4.1-8-3.4-17.6 1.8-24.9c0 0 0 0 0 0c7-10 12.6-20.9 17.7-32C322.1 415.9 328 388.7 328 360c0-75.1 60.9-136 136-136s136 60.9 136 136c0 28.7 5.9 55.9 17.8 82.1c5 11.1 10.7 22 17.7 32c5.2 7.3 5.9 16.9 1.8 24.9s-12.4 13-21.3 13l-304 0c-9 0-17.2-5-21.3-13zm-34.1-3c.8 5.5 2.4 10.9 4.8 16L74.5 512c-17 0-33.4-6.7-42.7-20.9C17.9 469.7 0 432.8 0 384c0-44.4 20.2-84.4 37.9-119.4c2.7-5.3 8.1-8.6 14-8.6l280.2 0c-4 5.1-7.8 10.4-11.2 16L52.1 272C34.1 307.5 16 344.1 16 384c0 44.8 16.4 78.7 29.2 98.3c5.6 8.6 16.2 13.7 29.3 13.7l182.1 0z" />
    </Icon>
);

export default NestingDolls;