
import { Icon } from "../../index";

/**
 * A component that renders the `soundcloud` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/soundcloud?s=brands soundcloud}
 * @preview ![soundcloud](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMTEuNCAyNTYuM2w1LjggNjUtNS44IDY4LjNjLS4zIDIuNS0yLjIgNC40LTQuNCA0LjRzLTQuMi0xLjktNC4yLTQuNGwtNS42LTY4LjMgNS42LTY1YzAtMi4yIDEuOS00LjIgNC4yLTQuMiAyLjIgMCA0LjEgMiA0LjQgNC4yem0yMS40LTQ1LjZjLTIuOCAwLTQuNyAyLjItNSA1bC01IDEwNS42IDUgNjguM2MuMyAyLjggMi4yIDUgNSA1IDIuNSAwIDQuNy0yLjIgNC43LTVsNS44LTY4LjMtNS44LTEwNS42YzAtMi44LTIuMi01LTQuNy01em0yNS41LTI0LjFjLTMuMSAwLTUuMyAyLjItNS42IDUuM2wtNC40IDEzMCA0LjQgNjcuOGMuMyAzLjEgMi41IDUuMyA1LjYgNS4zIDIuOCAwIDUuMy0yLjIgNS4zLTUuM2w1LjMtNjcuOC01LjMtMTMwYzAtMy4xLTIuNS01LjMtNS4zLTUuM3pNNy4yIDI4My4yYy0xLjQgMC0yLjIgMS4xLTIuNSAyLjVMMCAzMjEuM2w0LjcgMzVjLjMgMS40IDEuMSAyLjUgMi41IDIuNXMyLjItMS4xIDIuNS0yLjVsNS42LTM1LTUuNi0zNS42Yy0uMy0xLjQtMS4xLTIuNS0yLjUtMi41em0yMy42LTIxLjljLTEuNCAwLTIuNSAxLjEtMi41IDIuNWwtNi40IDU3LjUgNi40IDU2LjFjMCAxLjcgMS4xIDIuOCAyLjUgMi44czIuNS0xLjEgMi44LTIuNWw3LjItNTYuNC03LjItNTcuNWMtLjMtMS40LTEuNC0yLjUtMi44LTIuNXptMjUuMy0xMS40Yy0xLjcgMC0zLjEgMS40LTMuMyAzLjNMNDcgMzIxLjNsNS44IDY1LjhjLjMgMS43IDEuNyAzLjEgMy4zIDMuMSAxLjcgMCAzLjEtMS40IDMuMS0zLjFsNi45LTY1LjgtNi45LTY4LjFjMC0xLjktMS40LTMuMy0zLjEtMy4zem0yNS4zLTIuMmMtMS45IDAtMy42IDEuNC0zLjYgMy42bC01LjggNzAgNS44IDY3LjhjMCAyLjIgMS43IDMuNiAzLjYgMy42czMuNi0xLjQgMy45LTMuNmw2LjQtNjcuOC02LjQtNzBjLS4zLTIuMi0yLTMuNi0zLjktMy42em0yNDEuNC0xMTAuOWMtMS4xLS44LTIuOC0xLjQtNC4yLTEuNC0yLjIgMC00LjIuOC01LjYgMS45LTEuOSAxLjctMy4xIDQuMi0zLjMgNi43di44bC0zLjMgMTc2LjcgMS43IDMyLjUgMS43IDMxLjdjLjMgNC43IDQuMiA4LjYgOC45IDguNnM4LjYtMy45IDguNi04LjZsMy45LTY0LjItMy45LTE3Ny41Yy0uNC0zLTItNS44LTQuNS03LjJ6bS0yNi43IDE1LjNjLTEuNC0uOC0yLjgtMS40LTQuNC0xLjRzLTMuMS42LTQuNCAxLjRjLTIuMiAxLjQtMy42IDMuOS0zLjYgNi43bC0uMyAxLjctMi44IDE2MC44czAgLjMgMy4xIDY1LjZ2LjNjMCAxLjcuNiAzLjMgMS43IDQuNyAxLjcgMS45IDMuOSAzLjEgNi40IDMuMSAyLjIgMCA0LjItMS4xIDUuNi0yLjUgMS43LTEuNCAyLjUtMy4zIDIuNS01LjZsLjMtNi43IDMuMS01OC42LTMuMy0xNjIuOGMtLjMtMi44LTEuNy01LjMtMy45LTYuN3ptLTExMS40IDIyLjVjLTMuMSAwLTUuOCAyLjgtNS44IDYuMWwtNC40IDE0MC42IDQuNCA2Ny4yYy4zIDMuMyAyLjggNS44IDUuOCA1LjggMy4zIDAgNS44LTIuNSA2LjEtNS44bDUtNjcuMi01LTE0MC42Yy0uMi0zLjMtMi43LTYuMS02LjEtNi4xem0zNzYuNyA2Mi44Yy0xMC44IDAtMjEuMSAyLjItMzAuNiA2LjEtNi40LTcwLjgtNjUuOC0xMjYuNC0xMzguMy0xMjYuNC0xNy44IDAtMzUgMy4zLTUwLjMgOS40LTYuMSAyLjItNy44IDQuNC03LjggOS4ydjI0OS43YzAgNSAzLjkgOC42IDguNiA5LjJoMjE4LjNjNDMuMyAwIDc4LjYtMzUgNzguNi03OC4zLjEtNDMuNi0zNS4yLTc4LjktNzguNS03OC45em0tMjk2LjctNjAuM2MtNC4yIDAtNy41IDMuMy03LjggNy44bC0zLjMgMTM2LjcgMy4zIDY1LjZjLjMgNC4yIDMuNiA3LjUgNy44IDcuNSA0LjIgMCA3LjUtMy4zIDcuNS03LjVsMy45LTY1LjYtMy45LTEzNi43Yy0uMy00LjUtMy4zLTcuOC03LjUtNy44em0tNTMuNi03LjhjLTMuMyAwLTYuNCAzLjEtNi40IDYuN2wtMy45IDE0NS4zIDMuOSA2Ni45Yy4zIDMuNiAzLjEgNi40IDYuNCA2LjQgMy42IDAgNi40LTIuOCA2LjctNi40bDQuNC02Ni45LTQuNC0xNDUuM2MtLjMtMy42LTMuMS02LjctNi43LTYuN3ptMjYuNyAzLjRjLTMuOSAwLTYuOSAzLjEtNi45IDYuOUwyMjcgMzIxLjNsMy45IDY2LjRjLjMgMy45IDMuMSA2LjkgNi45IDYuOXM2LjktMy4xIDYuOS02LjlsNC4yLTY2LjQtNC4yLTE0MS43YzAtMy45LTMtNi45LTYuOS02Ljl6Ii8+PC9zdmc+|width=32|height=32)
 */
const Soundcloud: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M111.4 256.3l5.8 65-5.8 68.3c-.3 2.5-2.2 4.4-4.4 4.4s-4.2-1.9-4.2-4.4l-5.6-68.3 5.6-65c0-2.2 1.9-4.2 4.2-4.2 2.2 0 4.1 2 4.4 4.2zm21.4-45.6c-2.8 0-4.7 2.2-5 5l-5 105.6 5 68.3c.3 2.8 2.2 5 5 5 2.5 0 4.7-2.2 4.7-5l5.8-68.3-5.8-105.6c0-2.8-2.2-5-4.7-5zm25.5-24.1c-3.1 0-5.3 2.2-5.6 5.3l-4.4 130 4.4 67.8c.3 3.1 2.5 5.3 5.6 5.3 2.8 0 5.3-2.2 5.3-5.3l5.3-67.8-5.3-130c0-3.1-2.5-5.3-5.3-5.3zM7.2 283.2c-1.4 0-2.2 1.1-2.5 2.5L0 321.3l4.7 35c.3 1.4 1.1 2.5 2.5 2.5s2.2-1.1 2.5-2.5l5.6-35-5.6-35.6c-.3-1.4-1.1-2.5-2.5-2.5zm23.6-21.9c-1.4 0-2.5 1.1-2.5 2.5l-6.4 57.5 6.4 56.1c0 1.7 1.1 2.8 2.5 2.8s2.5-1.1 2.8-2.5l7.2-56.4-7.2-57.5c-.3-1.4-1.4-2.5-2.8-2.5zm25.3-11.4c-1.7 0-3.1 1.4-3.3 3.3L47 321.3l5.8 65.8c.3 1.7 1.7 3.1 3.3 3.1 1.7 0 3.1-1.4 3.1-3.1l6.9-65.8-6.9-68.1c0-1.9-1.4-3.3-3.1-3.3zm25.3-2.2c-1.9 0-3.6 1.4-3.6 3.6l-5.8 70 5.8 67.8c0 2.2 1.7 3.6 3.6 3.6s3.6-1.4 3.9-3.6l6.4-67.8-6.4-70c-.3-2.2-2-3.6-3.9-3.6zm241.4-110.9c-1.1-.8-2.8-1.4-4.2-1.4-2.2 0-4.2.8-5.6 1.9-1.9 1.7-3.1 4.2-3.3 6.7v.8l-3.3 176.7 1.7 32.5 1.7 31.7c.3 4.7 4.2 8.6 8.9 8.6s8.6-3.9 8.6-8.6l3.9-64.2-3.9-177.5c-.4-3-2-5.8-4.5-7.2zm-26.7 15.3c-1.4-.8-2.8-1.4-4.4-1.4s-3.1.6-4.4 1.4c-2.2 1.4-3.6 3.9-3.6 6.7l-.3 1.7-2.8 160.8s0 .3 3.1 65.6v.3c0 1.7.6 3.3 1.7 4.7 1.7 1.9 3.9 3.1 6.4 3.1 2.2 0 4.2-1.1 5.6-2.5 1.7-1.4 2.5-3.3 2.5-5.6l.3-6.7 3.1-58.6-3.3-162.8c-.3-2.8-1.7-5.3-3.9-6.7zm-111.4 22.5c-3.1 0-5.8 2.8-5.8 6.1l-4.4 140.6 4.4 67.2c.3 3.3 2.8 5.8 5.8 5.8 3.3 0 5.8-2.5 6.1-5.8l5-67.2-5-140.6c-.2-3.3-2.7-6.1-6.1-6.1zm376.7 62.8c-10.8 0-21.1 2.2-30.6 6.1-6.4-70.8-65.8-126.4-138.3-126.4-17.8 0-35 3.3-50.3 9.4-6.1 2.2-7.8 4.4-7.8 9.2v249.7c0 5 3.9 8.6 8.6 9.2h218.3c43.3 0 78.6-35 78.6-78.3.1-43.6-35.2-78.9-78.5-78.9zm-296.7-60.3c-4.2 0-7.5 3.3-7.8 7.8l-3.3 136.7 3.3 65.6c.3 4.2 3.6 7.5 7.8 7.5 4.2 0 7.5-3.3 7.5-7.5l3.9-65.6-3.9-136.7c-.3-4.5-3.3-7.8-7.5-7.8zm-53.6-7.8c-3.3 0-6.4 3.1-6.4 6.7l-3.9 145.3 3.9 66.9c.3 3.6 3.1 6.4 6.4 6.4 3.6 0 6.4-2.8 6.7-6.4l4.4-66.9-4.4-145.3c-.3-3.6-3.1-6.7-6.7-6.7zm26.7 3.4c-3.9 0-6.9 3.1-6.9 6.9L227 321.3l3.9 66.4c.3 3.9 3.1 6.9 6.9 6.9s6.9-3.1 6.9-6.9l4.2-66.4-4.2-141.7c0-3.9-3-6.9-6.9-6.9z" />
    </Icon>
);

export default Soundcloud;