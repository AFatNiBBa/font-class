
import { Icon } from "../../index";

/**
 * A component that renders the `falafel` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/falafel?s=regular falafel}
 * @preview ![falafel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTQ3LjQgMTIwLjNjLTE1LjIgMTguNC0xNS4yIDQ1LjEgMCA2My41Yy4zIC40IC41IDEgLjMgMS42Yy0yLjMgOS0xLjkgMTguMiAuNiAyNi42Yy0yMC44LTktNDUtMi40LTU4LjUgMTUuOWMtLjMgLjQtLjUgLjQtLjcgLjRjLTI0LjMtLjctNDQuOSAxNi41LTQ5LjQgMzkuOWMtLjEgLjYtLjUgMS0uNyAxLjFjLTIxLjkgMTAtMzMuMSAzNC4zLTI3LjMgNTcuM2MuMiAuNiAwIDEuMy0uMyAxLjZjLTE1LjIgMTguNC0xNS4yIDQ1LjEgMCA2My41Yy4zIC40IC41IDEgLjMgMS42Yy01LjggMjMgNS40IDQ3LjMgMjcuMyA1Ny4zYy4yIC4xIC42IC40IC43IDEuMWM0LjYgMjMuNCAyNS4yIDQwLjYgNDkuNCAzOS45Yy4xIDAgLjQgMCAuNyAuNGMxNC4zIDE5LjQgNDAuNSAyNS42IDYxLjkgMTQuM2MuMS0uMSAuMi0uMSAuMy0uMXMuMiAwIC4zIC4xYzIxLjUgMTEuMyA0Ny43IDUgNjEuOS0xNC4zYy4zLS40IC41LS40IC43LS40YzI0LjMgLjcgNDQuOS0xNi41IDQ5LjQtMzkuOWMuMS0uNiAuNS0xIC43LTEuMWMxMC4yLTQuNyAxOC4xLTEyLjQgMjMtMjEuN2M0LjkgOS4zIDEyLjggMTcuMSAyMyAyMS43Yy4yIC4xIC42IC40IC43IDEuMWM0LjYgMjMuNCAyNS4yIDQwLjYgNDkuNCAzOS45Yy4xIDAgLjQgMCAuNyAuNGMxNC4zIDE5LjQgNDAuNSAyNS42IDYxLjkgMTQuM2MuMS0uMSAuMi0uMSAuMy0uMXMuMiAwIC4zIC4xYzIxLjUgMTEuMyA0Ny43IDUgNjEuOS0xNC4zYy4zLS40IC42LS40IC43LS40YzI0LjMgLjcgNDQuOS0xNi41IDQ5LjQtMzkuOWMuMS0uNiAuNS0xIC43LTEuMWMxNi40LTcuNSAyNi43LTIyLjkgMjguNS0zOS45Yy0xOC42IDcuMy0zOS40IDYtNTYuOSAxLjJjMCAwIDAgMC0uMSAwYy0xMCA3LjMtMTcgMTguMi0xOS40IDMwLjZjLS4xIC41LS4zIC44LS41IC45cy0uMyAuMi0uNCAuMmMtMTYuMS0uNS0zMS4yIDcuMS00MC43IDE5LjljLS4xIC4yLS4yIC4yLS4zIC4zcy0uMiAuMS0uMiAuMXMtLjEgMC0uMiAwYzAgMC0uMSAwLS4yLS4xYy0xNC4yLTcuNS0zMS4xLTcuNS00NS4zIDBjLS4xIDAtLjEgMC0uMSAuMWMwIDAgMCAwLS4xIDBzMCAwLS4xIDBzMCAwLS4xIDBzMCAwLS4xIDBjLS4xIDAtLjItLjEtLjItLjFzLS4yLS4xLS4zLS4zYy05LjUtMTIuOC0yNC42LTIwLjQtNDAuNy0xOS45Yy0uMSAwLS4yIDAtLjQtLjJzLS40LS41LS41LS45Yy0zLTE1LjYtMTMuMy0yOC45LTI3LjktMzUuNWMtLjItLjEtLjQtLjItLjYtLjZzLS4yLS44LS4xLTEuM2MzLjktMTUuNCAuMy0zMS43LTkuOS00NGMtLjItLjMtLjQtLjctLjQtMS4xcy4yLS45IC40LTEuMWMxMC4xLTEyLjMgMTMuOC0yOC42IDkuOS00NGMtLjEtLjUtLjEtLjkgLjEtMS4zcy40LS41IC42LS42YzE0LjYtNi43IDI0LjgtMjAgMjcuOS0zNS41Yy4xLS41IC4zLS44IC41LS45cy4zLS4yIC40LS4yYzguNyAuMiAxNy4xLTEuOCAyNC41LTUuOWMtLjktMTEuNyAuMy0yMy44IDQuNi0zNS4yYzcuMS00LjEgMTYtNC40IDIzLjctLjRsLjQgLjJjMTMuOC0xMi4xIDIwLTMxLjMgMTUuNC00OS43Yy0uMi0uNiAwLTEuMyAuMy0xLjZjMTUuMi0xOC40IDE1LjItNDUuMSAwLTYzLjVjLS4zLS40LS41LTEtLjMtMS42YzUuOC0yMy01LjQtNDcuMy0yNy4zLTU3LjNjLS4yLS4xLS42LS40LS43LTEuMWMtNC42LTIzLjQtMjUuMi00MC42LTQ5LjQtMzkuOWMtLjEgMC0uNCAwLS43LS40QzMzNS45IC42IDMwOS43LTUuNyAyODguMyA1LjZjLS4xIC4xLS4yIC4xLS4zIC4xcy0uMiAwLS4zLS4xYy0yMS41LTExLjMtNDcuNy01LTYxLjkgMTQuM2MtLjMgLjQtLjUgLjQtLjcgLjRjLTI0LjMtLjctNDQuOSAxNi41LTQ5LjQgMzkuOWMtLjEgLjYtLjUgMS0uNyAxLjFjLTIxLjkgMTAtMzMuMSAzNC4zLTI3LjMgNTcuM2MuMiAuNiAwIDEuMy0uMyAxLjZ6TTMyNC41IDI0My40Yy01IDMuMi05LjQgNy4zLTEzIDEyLjJjLS4xIC4yLS4yIC4yLS4zIC4zcy0uMiAuMS0uMiAuMXMtLjEgMC0uMiAwYzAgMC0uMSAwLS4yLS4xYy0xNC4yLTcuNS0zMS4xLTcuNS00NS4zIDBjLS4xIC4xLS4yIC4xLS4yIC4xcy0uMSAwLS4xIDBjMCAwIDAgMC0uMSAwYy0uMSAwLS4yIDAtLjItLjFzLS4yLS4xLS4zLS4zYy0zLjYtNC45LTgtOS0xMy0xMi4yYy03LjgtOC4yLTE4LjQtMTMuNi0zMC4yLTE0LjljLTQuMi0xMi45LTEzLjctMjMuNy0yNi4zLTI5LjVjLS4yLS4xLS40LS4yLS42LS42cy0uMi0uOC0uMS0xLjNjMy45LTE1LjQgLjMtMzEuNy05LjktNDRjLS4yLS4zLS40LS43LS40LTEuMXMuMi0uOSAuNC0xLjFjMTAuMS0xMi4zIDEzLjgtMjguNiA5LjktNDRjLS4xLS41LS4xLS45IC4xLTEuM3MuNC0uNSAuNi0uNmMxNC42LTYuNyAyNC44LTIwIDI3LjktMzUuNWMuMS0uNSAuMy0uOCAuNS0uOXMuMy0uMiAuNC0uMmMxNi4xIC41IDMxLjItNy4xIDQwLjctMTkuOWMuMS0uMiAuMi0uMiAuMy0uM3MuMi0uMSAuMi0uMXMuMSAwIC4yIDBjMCAwIC4xIDAgLjIgLjFjMTQuMiA3LjUgMzEuMSA3LjUgNDUuMyAwYy4xLS4xIC4yLS4xIC4yLS4xYzAgMCAuMSAwIC4yIDBjMCAwIDAgMCAuMSAwczAgMCAuMSAwYzAgMCAuMSAwIC4xIC4xYy4xIDAgLjIgLjEgLjMgLjNjOS41IDEyLjggMjQuNiAyMC40IDQwLjcgMTkuOWMuMSAwIC4yIDAgLjQgLjJzLjQgLjUgLjUgLjljMyAxNS42IDEzLjMgMjguOSAyNy45IDM1LjVjLjIgLjEgLjQgLjIgLjYgLjZzLjIgLjggLjEgMS4zYy0zLjkgMTUuNC0uMyAzMS43IDkuOSA0NGMuMiAuMyAuNCAuNyAuNCAxLjFzLS4yIC45LS40IDEuMWMtMTAuMSAxMi4zLTEzLjggMjguNi05LjkgNDRjLjEgLjUgLjEgLjktLjEgMS4zcy0uNCAuNS0uNiAuNmMtMTIuNiA1LjgtMjIuMSAxNi42LTI2LjMgMjkuNWMtMTEuOCAxLjItMjIuNCA2LjctMzAuMiAxNC45ek00OC40IDM2MS4xYy0uMi0uMy0uNC0uNy0uNC0xLjFzLjItLjkgLjQtMS4xYzEwLjEtMTIuMyAxMy44LTI4LjYgOS45LTQ0Yy0uMS0uNS0uMS0uOSAuMS0xLjNzLjQtLjUgLjYtLjZjMTQuNi02LjcgMjQuOC0yMCAyNy45LTM1LjVjLjEtLjUgLjMtLjggLjUtLjlzLjMtLjIgLjQtLjJjMTYuMSAuNSAzMS4yLTcuMSA0MC43LTE5LjljLjEtLjIgLjItLjIgLjMtLjNzLjItLjEgLjItLjFzLjEgMCAuMiAwYzAgMCAuMSAwIC4yIC4xYzE0LjIgNy41IDMxLjEgNy41IDQ1LjMgMGMuMS0uMSAuMi0uMSAuMi0uMWMwIDAgLjEgMCAuMiAwYzAgMCAuMSAwIC4xIDBjMCAwIDAgMCAwIDBjMCAwIC4xIDAgLjEgLjFjLjEgMCAuMiAuMSAuMyAuM2M5LjUgMTIuOCAyNC42IDIwLjQgNDAuNyAxOS45Yy4xIDAgLjIgMCAuNCAuMnMuNCAuNSAuNSAuOWMzIDE1LjYgMTMuMyAyOC45IDI3LjkgMzUuNWMuMiAuMSAuNCAuMiAuNiAuNnMuMiAuOCAuMSAxLjNjLTMuOSAxNS4zLS4zIDMxLjcgOS45IDQ0Yy4yIC4zIC40IC43IC40IDEuMXMtLjIgLjktLjQgMS4xYy0xMC4xIDEyLjMtMTMuOCAyOC42LTkuOSA0NGMuMSAuNSAuMSAuOS0uMSAxLjNzLS40IC41LS42IC42Yy0xNC42IDYuNy0yNC44IDIwLTI3LjkgMzUuNWMtLjEgLjUtLjMgLjgtLjUgLjlzLS4zIC4yLS40IC4yYy0xNi4xLS41LTMxLjIgNy4xLTQwLjcgMTkuOWMtLjEgLjItLjIgLjItLjMgLjNjMCAwLS4xIDAtLjEgLjFjMCAwLS4xIDAtLjEgMGMwIDAgMCAwLS4xIDBzMCAwLS4xIDBzMCAwLS4xIDBjMCAwLS4xIDAtLjItLjFjLTE0LjItNy41LTMxLjEtNy41LTQ1LjMgMGMtLjEgLjEtLjIgLjEtLjIgLjFjMCAwLS4xIDAtLjIgMHMtLjItLjEtLjItLjFzLS4yLS4xLS4zLS4zYy05LjUtMTIuOC0yNC42LTIwLjQtNDAuNy0xOS45Yy0uMSAwLS4yIDAtLjQtLjJzLS40LS41LS41LS45Yy0zLTE1LjYtMTMuMy0yOC45LTI3LjktMzUuNWMtLjItLjEtLjQtLjItLjYtLjZzLS4yLS44LS4xLTEuM2MzLjktMTUuNCAuMy0zMS43LTkuOS00NHpNNDE2IDI2MWMtMSAyNC4yIDEzLjYgNTYgNDAuMyA4Mi43YzE5LjMgMTkuMyA0MS40IDMyLjMgNjEuMyAzNy42YzE5LjUgNS4yIDM3IDMgNDcuOS03LjljNS41LTUuNSA4LjgtMTIuNyAxMC0yMC45YzIuMS0xNC4yLTEuOC0zMS42LTEwLjktNDkuM2MtNS4yLTEwLjEtMTIuMS0yMC4zLTIwLjYtMzAuMWMtMi42LTMtNS40LTUuOS04LjItOC44bC0uNS0uNWMtMzMuNS0zMy4zLTc0LjktNDcuNS05OS4zLTM1LjljLTMuNSAxLjctNi42IDMuOC05LjQgNi42Yy02LjcgNi43LTEwLjEgMTUuOS0xMC41IDI2LjV6TTExMiAzNTJhMTYgMTYgMCAxIDAgLTMyIDAgMTYgMTYgMCAxIDAgMzIgMHptNDggMTZhMTYgMTYgMCAxIDAgMC0zMiAxNiAxNiAwIDEgMCAwIDMyem0tMTYgNDhhMTYgMTYgMCAxIDAgLTMyIDAgMTYgMTYgMCAxIDAgMzIgMHptMjI0LTQ4YTE2IDE2IDAgMSAwIDAtMzIgMTYgMTYgMCAxIDAgMCAzMnptNDggNDhhMTYgMTYgMCAxIDAgLTMyIDAgMTYgMTYgMCAxIDAgMzIgMHpNMjI0IDE3NmExNiAxNiAwIDEgMCAwLTMyIDE2IDE2IDAgMSAwIDAgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Falafel: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M147.4 120.3c-15.2 18.4-15.2 45.1 0 63.5c.3 .4 .5 1 .3 1.6c-2.3 9-1.9 18.2 .6 26.6c-20.8-9-45-2.4-58.5 15.9c-.3 .4-.5 .4-.7 .4c-24.3-.7-44.9 16.5-49.4 39.9c-.1 .6-.5 1-.7 1.1c-21.9 10-33.1 34.3-27.3 57.3c.2 .6 0 1.3-.3 1.6c-15.2 18.4-15.2 45.1 0 63.5c.3 .4 .5 1 .3 1.6c-5.8 23 5.4 47.3 27.3 57.3c.2 .1 .6 .4 .7 1.1c4.6 23.4 25.2 40.6 49.4 39.9c.1 0 .4 0 .7 .4c14.3 19.4 40.5 25.6 61.9 14.3c.1-.1 .2-.1 .3-.1s.2 0 .3 .1c21.5 11.3 47.7 5 61.9-14.3c.3-.4 .5-.4 .7-.4c24.3 .7 44.9-16.5 49.4-39.9c.1-.6 .5-1 .7-1.1c10.2-4.7 18.1-12.4 23-21.7c4.9 9.3 12.8 17.1 23 21.7c.2 .1 .6 .4 .7 1.1c4.6 23.4 25.2 40.6 49.4 39.9c.1 0 .4 0 .7 .4c14.3 19.4 40.5 25.6 61.9 14.3c.1-.1 .2-.1 .3-.1s.2 0 .3 .1c21.5 11.3 47.7 5 61.9-14.3c.3-.4 .6-.4 .7-.4c24.3 .7 44.9-16.5 49.4-39.9c.1-.6 .5-1 .7-1.1c16.4-7.5 26.7-22.9 28.5-39.9c-18.6 7.3-39.4 6-56.9 1.2c0 0 0 0-.1 0c-10 7.3-17 18.2-19.4 30.6c-.1 .5-.3 .8-.5 .9s-.3 .2-.4 .2c-16.1-.5-31.2 7.1-40.7 19.9c-.1 .2-.2 .2-.3 .3s-.2 .1-.2 .1s-.1 0-.2 0c0 0-.1 0-.2-.1c-14.2-7.5-31.1-7.5-45.3 0c-.1 0-.1 0-.1 .1c0 0 0 0-.1 0s0 0-.1 0s0 0-.1 0s0 0-.1 0c-.1 0-.2-.1-.2-.1s-.2-.1-.3-.3c-9.5-12.8-24.6-20.4-40.7-19.9c-.1 0-.2 0-.4-.2s-.4-.5-.5-.9c-3-15.6-13.3-28.9-27.9-35.5c-.2-.1-.4-.2-.6-.6s-.2-.8-.1-1.3c3.9-15.4 .3-31.7-9.9-44c-.2-.3-.4-.7-.4-1.1s.2-.9 .4-1.1c10.1-12.3 13.8-28.6 9.9-44c-.1-.5-.1-.9 .1-1.3s.4-.5 .6-.6c14.6-6.7 24.8-20 27.9-35.5c.1-.5 .3-.8 .5-.9s.3-.2 .4-.2c8.7 .2 17.1-1.8 24.5-5.9c-.9-11.7 .3-23.8 4.6-35.2c7.1-4.1 16-4.4 23.7-.4l.4 .2c13.8-12.1 20-31.3 15.4-49.7c-.2-.6 0-1.3 .3-1.6c15.2-18.4 15.2-45.1 0-63.5c-.3-.4-.5-1-.3-1.6c5.8-23-5.4-47.3-27.3-57.3c-.2-.1-.6-.4-.7-1.1c-4.6-23.4-25.2-40.6-49.4-39.9c-.1 0-.4 0-.7-.4C335.9 .6 309.7-5.7 288.3 5.6c-.1 .1-.2 .1-.3 .1s-.2 0-.3-.1c-21.5-11.3-47.7-5-61.9 14.3c-.3 .4-.5 .4-.7 .4c-24.3-.7-44.9 16.5-49.4 39.9c-.1 .6-.5 1-.7 1.1c-21.9 10-33.1 34.3-27.3 57.3c.2 .6 0 1.3-.3 1.6zM324.5 243.4c-5 3.2-9.4 7.3-13 12.2c-.1 .2-.2 .2-.3 .3s-.2 .1-.2 .1s-.1 0-.2 0c0 0-.1 0-.2-.1c-14.2-7.5-31.1-7.5-45.3 0c-.1 .1-.2 .1-.2 .1s-.1 0-.1 0c0 0 0 0-.1 0c-.1 0-.2 0-.2-.1s-.2-.1-.3-.3c-3.6-4.9-8-9-13-12.2c-7.8-8.2-18.4-13.6-30.2-14.9c-4.2-12.9-13.7-23.7-26.3-29.5c-.2-.1-.4-.2-.6-.6s-.2-.8-.1-1.3c3.9-15.4 .3-31.7-9.9-44c-.2-.3-.4-.7-.4-1.1s.2-.9 .4-1.1c10.1-12.3 13.8-28.6 9.9-44c-.1-.5-.1-.9 .1-1.3s.4-.5 .6-.6c14.6-6.7 24.8-20 27.9-35.5c.1-.5 .3-.8 .5-.9s.3-.2 .4-.2c16.1 .5 31.2-7.1 40.7-19.9c.1-.2 .2-.2 .3-.3s.2-.1 .2-.1s.1 0 .2 0c0 0 .1 0 .2 .1c14.2 7.5 31.1 7.5 45.3 0c.1-.1 .2-.1 .2-.1c0 0 .1 0 .2 0c0 0 0 0 .1 0s0 0 .1 0c0 0 .1 0 .1 .1c.1 0 .2 .1 .3 .3c9.5 12.8 24.6 20.4 40.7 19.9c.1 0 .2 0 .4 .2s.4 .5 .5 .9c3 15.6 13.3 28.9 27.9 35.5c.2 .1 .4 .2 .6 .6s.2 .8 .1 1.3c-3.9 15.4-.3 31.7 9.9 44c.2 .3 .4 .7 .4 1.1s-.2 .9-.4 1.1c-10.1 12.3-13.8 28.6-9.9 44c.1 .5 .1 .9-.1 1.3s-.4 .5-.6 .6c-12.6 5.8-22.1 16.6-26.3 29.5c-11.8 1.2-22.4 6.7-30.2 14.9zM48.4 361.1c-.2-.3-.4-.7-.4-1.1s.2-.9 .4-1.1c10.1-12.3 13.8-28.6 9.9-44c-.1-.5-.1-.9 .1-1.3s.4-.5 .6-.6c14.6-6.7 24.8-20 27.9-35.5c.1-.5 .3-.8 .5-.9s.3-.2 .4-.2c16.1 .5 31.2-7.1 40.7-19.9c.1-.2 .2-.2 .3-.3s.2-.1 .2-.1s.1 0 .2 0c0 0 .1 0 .2 .1c14.2 7.5 31.1 7.5 45.3 0c.1-.1 .2-.1 .2-.1c0 0 .1 0 .2 0c0 0 .1 0 .1 0c0 0 0 0 0 0c0 0 .1 0 .1 .1c.1 0 .2 .1 .3 .3c9.5 12.8 24.6 20.4 40.7 19.9c.1 0 .2 0 .4 .2s.4 .5 .5 .9c3 15.6 13.3 28.9 27.9 35.5c.2 .1 .4 .2 .6 .6s.2 .8 .1 1.3c-3.9 15.3-.3 31.7 9.9 44c.2 .3 .4 .7 .4 1.1s-.2 .9-.4 1.1c-10.1 12.3-13.8 28.6-9.9 44c.1 .5 .1 .9-.1 1.3s-.4 .5-.6 .6c-14.6 6.7-24.8 20-27.9 35.5c-.1 .5-.3 .8-.5 .9s-.3 .2-.4 .2c-16.1-.5-31.2 7.1-40.7 19.9c-.1 .2-.2 .2-.3 .3c0 0-.1 0-.1 .1c0 0-.1 0-.1 0c0 0 0 0-.1 0s0 0-.1 0s0 0-.1 0c0 0-.1 0-.2-.1c-14.2-7.5-31.1-7.5-45.3 0c-.1 .1-.2 .1-.2 .1c0 0-.1 0-.2 0s-.2-.1-.2-.1s-.2-.1-.3-.3c-9.5-12.8-24.6-20.4-40.7-19.9c-.1 0-.2 0-.4-.2s-.4-.5-.5-.9c-3-15.6-13.3-28.9-27.9-35.5c-.2-.1-.4-.2-.6-.6s-.2-.8-.1-1.3c3.9-15.4 .3-31.7-9.9-44zM416 261c-1 24.2 13.6 56 40.3 82.7c19.3 19.3 41.4 32.3 61.3 37.6c19.5 5.2 37 3 47.9-7.9c5.5-5.5 8.8-12.7 10-20.9c2.1-14.2-1.8-31.6-10.9-49.3c-5.2-10.1-12.1-20.3-20.6-30.1c-2.6-3-5.4-5.9-8.2-8.8l-.5-.5c-33.5-33.3-74.9-47.5-99.3-35.9c-3.5 1.7-6.6 3.8-9.4 6.6c-6.7 6.7-10.1 15.9-10.5 26.5zM112 352a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm-16 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm224-48a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm48 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM224 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Falafel;