
import { Icon } from "../../index";

/**
 * A component that renders the `hands-praying` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hands-praying?s=regular hands-praying}
 * @preview ![hands-praying](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjc3LjggNDhjLTUuOSAwLTExLjQgMi45LTE0LjggNy43bC05OS44IDE0MWMtMTIuNCAxNy42LTE5LjEgMzguNi0xOS4xIDYwLjFsMCA0MC4yYzAgMjQuMS0xNS40IDQ1LjUtMzguMyA1My4xTDMxLjYgMzc0LjhDMTkgMzc5IDUuNCAzNzIuMiAxLjIgMzU5LjZTMy44IDMzMy40IDE2LjQgMzI5LjJsNzQuMS0yNC43YzMuMy0xLjEgNS41LTQuMSA1LjUtNy42bDAtNDAuMmMwLTMxLjUgOS44LTYyLjIgMjgtODcuOWw5OS44LTE0MUMyMzYuMiAxMC40IDI1Ni40IDAgMjc3LjggMGMxNi4xIDAgMzAuOCA1LjggNDIuMiAxNS4zQzMzMS40IDUuOCAzNDYuMSAwIDM2Mi4yIDBjMjEuNSAwIDQxLjYgMTAuNCA1NCAyNy45bDk5LjggMTQxYzE4LjIgMjUuNyAyOCA1Ni40IDI4IDg3LjlsMCA0MC4yYzAgMy40IDIuMiA2LjUgNS41IDcuNmw3NC4xIDI0LjdjMTIuNiA0LjIgMTkuNCAxNy44IDE1LjIgMzAuNHMtMTcuOCAxOS40LTMwLjQgMTUuMmwtNzQuMS0yNC43Yy0yMi45LTcuNi0zOC4zLTI5LTM4LjMtNTMuMWwwLTQwLjJjMC0yMS41LTYuNy00Mi41LTE5LjEtNjAuMUwzNzcgNTUuN2MtMy40LTQuOC04LjktNy43LTE0LjgtNy43Yy05LjYgMC0xOCA4LTE4LjIgMTguMmwwIC40IDAgLjRjLjEgMy43IDEuMyA3LjQgMy4zIDEwLjNMNDE2LjUgMTc4YzEwLjEgMTQuNyAxNS41IDMyLjEgMTUuNSA0OS45bDAgOC4xIDAgNjBjMCAxMy4zLTEwLjcgMjQtMjQgMjRzLTI0LTEwLjctMjQtMjRsMC02MGMwLTExLTktMjAtMjAtMjBjLTEwLjkgMC0xOS44IDguNy0yMCAxOS42bDAgLjQgMCA3NGMwIC4zIDAgLjYgMCAuOWMuNCA0Ni42IDMxLjggODcuMyA3Ni45IDk5LjVsMjAxLjQgNTQuNGMxMi44IDMuNSAyMC40IDE2LjYgMTYuOSAyOS40cy0xNi42IDIwLjQtMjkuNCAxNi45TDQwOC4zIDQ1Ni43QzM3MC45IDQ0Ni42IDMzOS45IDQyMyAzMjAgMzkyYy0xOS45IDMxLTUwLjkgNTQuNi04OC4zIDY0LjhMMzAuMyA1MTEuMmMtMTIuOCAzLjUtMjYtNC4xLTI5LjQtMTYuOXM0LjEtMjYgMTYuOS0yOS40bDIwMS40LTU0LjRjNDUuMS0xMi4yIDc2LjUtNTIuOSA3Ni45LTk5LjVjMC0uMyAwLS42IDAtLjlsMC03NCAwLS40Yy0uMi0xMC44LTkuMS0xOS42LTIwLTE5LjZjLTExIDAtMjAgOS0yMCAyMGwwIDYwYzAgMTMuMy0xMC43IDI0LTI0IDI0cy0yNC0xMC43LTI0LTI0bDAtNjAgMC04LjFjMC0xNy44IDUuNC0zNS4yIDE1LjUtNDkuOUwyOTIuNyA3Ny4zYzItMi45IDMuMi02LjYgMy4zLTEwLjNsMC0uNCAwLS40QzI5NS44IDU2IDI4Ny40IDQ4IDI3Ny44IDQ4ek0zMjAgMTIyLjRMMjg3LjkgMTY5YzEyLjEgMi4xIDIzLjEgNy41IDMyLjEgMTUuMWM5LTcuNiAyMC0xMyAzMi4xLTE1LjFMMzIwIDEyMi40eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HandsPraying: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M277.8 48c-5.9 0-11.4 2.9-14.8 7.7l-99.8 141c-12.4 17.6-19.1 38.6-19.1 60.1l0 40.2c0 24.1-15.4 45.5-38.3 53.1L31.6 374.8C19 379 5.4 372.2 1.2 359.6S3.8 333.4 16.4 329.2l74.1-24.7c3.3-1.1 5.5-4.1 5.5-7.6l0-40.2c0-31.5 9.8-62.2 28-87.9l99.8-141C236.2 10.4 256.4 0 277.8 0c16.1 0 30.8 5.8 42.2 15.3C331.4 5.8 346.1 0 362.2 0c21.5 0 41.6 10.4 54 27.9l99.8 141c18.2 25.7 28 56.4 28 87.9l0 40.2c0 3.4 2.2 6.5 5.5 7.6l74.1 24.7c12.6 4.2 19.4 17.8 15.2 30.4s-17.8 19.4-30.4 15.2l-74.1-24.7c-22.9-7.6-38.3-29-38.3-53.1l0-40.2c0-21.5-6.7-42.5-19.1-60.1L377 55.7c-3.4-4.8-8.9-7.7-14.8-7.7c-9.6 0-18 8-18.2 18.2l0 .4 0 .4c.1 3.7 1.3 7.4 3.3 10.3L416.5 178c10.1 14.7 15.5 32.1 15.5 49.9l0 8.1 0 60c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-60c0-11-9-20-20-20c-10.9 0-19.8 8.7-20 19.6l0 .4 0 74c0 .3 0 .6 0 .9c.4 46.6 31.8 87.3 76.9 99.5l201.4 54.4c12.8 3.5 20.4 16.6 16.9 29.4s-16.6 20.4-29.4 16.9L408.3 456.7C370.9 446.6 339.9 423 320 392c-19.9 31-50.9 54.6-88.3 64.8L30.3 511.2c-12.8 3.5-26-4.1-29.4-16.9s4.1-26 16.9-29.4l201.4-54.4c45.1-12.2 76.5-52.9 76.9-99.5c0-.3 0-.6 0-.9l0-74 0-.4c-.2-10.8-9.1-19.6-20-19.6c-11 0-20 9-20 20l0 60c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-60 0-8.1c0-17.8 5.4-35.2 15.5-49.9L292.7 77.3c2-2.9 3.2-6.6 3.3-10.3l0-.4 0-.4C295.8 56 287.4 48 277.8 48zM320 122.4L287.9 169c12.1 2.1 23.1 7.5 32.1 15.1c9-7.6 20-13 32.1-15.1L320 122.4z" />
    </Icon>
);

export default HandsPraying;