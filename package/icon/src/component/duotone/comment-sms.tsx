
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-sms` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-sms?s=duotone comment-sms}
 * @preview ![comment-sms](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI0MGMwIDQ1LjEgMTcuNyA4Ni44IDQ3LjcgMTIwLjljLTEuOSAyNC41LTExLjQgNDYuMy0yMS40IDYyLjljLTUuNSA5LjItMTEuMSAxNi42LTE1LjIgMjEuNmMtMi4xIDIuNS0zLjcgNC40LTQuOSA1LjdjLS42IC42LTEgMS4xLTEuMyAxLjRsLS4zIC4zQzEuNiA0NTUuOCAwIDQ1OS45IDAgNDY0YzAgMi4xIC40IDQuMSAxLjIgNi4xYzIuNSA2IDguMyA5LjkgMTQuOCA5LjljMjguNyAwIDU3LjYtOC45IDgxLjYtMTkuM2MyMi45LTEwIDQyLjQtMjEuOSA1NC4zLTMwLjZjMzEuOCAxMS41IDY3IDE3LjkgMTA0LjEgMTcuOWMxNDEuNCAwIDI1Ni05My4xIDI1Ni0yMDhTMzk3LjQgMzIgMjU2IDMyUzAgMTI1LjEgMCAyNDB6bTk2LTI3LjJjMC0yMC4zIDE2LjUtMzYuOCAzNi44LTM2LjhsMTkuMiAwYzguOCAwIDE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2bC0xOS4yIDBjLTIuNyAwLTQuOCAyLjItNC44IDQuOGMwIDEuNiAuOCAzLjEgMi4yIDRsMjkuNCAxOS42YzEwLjIgNi44IDE2LjQgMTguMyAxNi40IDMwLjdjMCAyMC4zLTE2LjUgMzYuOC0zNi44IDM2LjhMMTEyIDMwNGMtOC44IDAtMTYtNy4yLTE2LTE2czcuMi0xNiAxNi0xNmwyNy4yIDBjMi43IDAgNC44LTIuMiA0LjgtNC44YzAtMS42LS44LTMuMS0yLjItNGwtMjkuNC0xOS42QzEwMi4yIDIzNi43IDk2IDIyNS4yIDk2IDIxMi44ek0xOTIgMTkyYzAtNi45IDQuNC0xMyAxMC45LTE1LjJzMTMuNyAuMSAxNy45IDUuNkwyNTYgMjI5LjNsMzUuMi00Ni45YzQuMS01LjUgMTEuMy03LjggMTcuOS01LjZzMTAuOSA4LjMgMTAuOSAxNS4ybDAgOTZjMCA4LjgtNy4yIDE2LTE2IDE2cy0xNi03LjItMTYtMTZsMC00OC0xOS4yIDI1LjZjLTMgNC03LjggNi40LTEyLjggNi40cy05LjgtMi40LTEyLjgtNi40TDIyNCAyNDBsMCA0OGMwIDguOC03LjIgMTYtMTYgMTZzLTE2LTcuMi0xNi0xNmwwLTk2em0xNDQgMjAuOGMwLTIwLjMgMTYuNS0zNi44IDM2LjgtMzYuOGwxOS4yIDBjOC44IDAgMTYgNy4yIDE2IDE2cy03LjIgMTYtMTYgMTZsLTE5LjIgMGMtMi43IDAtNC44IDIuMi00LjggNC44YzAgMS42IC44IDMuMSAyLjIgNGwyOS40IDE5LjZjMTAuMiA2LjggMTYuNCAxOC4zIDE2LjQgMzAuN2MwIDIwLjMtMTYuNSAzNi44LTM2LjggMzYuOEwzNTIgMzA0Yy04LjggMC0xNi03LjItMTYtMTZzNy4yLTE2IDE2LTE2bDI3LjIgMGMyLjcgMCA0LjgtMi4yIDQuOC00LjhjMC0xLjYtLjgtMy4xLTIuMi00bC0yOS40LTE5LjZjLTEwLjItNi44LTE2LjQtMTguMy0xNi40LTMwLjd6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMzIuOCAxNzZsMTkuMiAwYzguOCAwIDE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2bC0xOS4yIDBjLTIuNyAwLTQuOCAyLjItNC44IDQuOGMwIDEuNiAuOCAzLjEgMi4yIDRsMjkuNCAxOS42YzEwLjIgNi44IDE2LjQgMTguMyAxNi40IDMwLjdjMCAyMC4zLTE2LjUgMzYuOC0zNi44IDM2LjhMMTEyIDMwNGMtOC44IDAtMTYtNy4yLTE2LTE2czcuMi0xNiAxNi0xNmwyNy4yIDBjMi43IDAgNC44LTIuMiA0LjgtNC44YzAtMS42LS44LTMuMS0yLjItNGwtMjkuNC0xOS42QzEwMi4yIDIzNi43IDk2IDIyNS4yIDk2IDIxMi44YzAtMjAuMyAxNi41LTM2LjggMzYuOC0zNi44ek0zMzYgMjEyLjhjMC0yMC4zIDE2LjUtMzYuOCAzNi44LTM2LjhsMTkuMiAwYzguOCAwIDE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2bC0xOS4yIDBjLTIuNyAwLTQuOCAyLjItNC44IDQuOGMwIDEuNiAuOCAzLjEgMi4yIDRsMjkuNCAxOS42YzEwLjIgNi44IDE2LjQgMTguMyAxNi40IDMwLjdjMCAyMC4zLTE2LjUgMzYuOC0zNi44IDM2LjhMMzUyIDMwNGMtOC44IDAtMTYtNy4yLTE2LTE2czcuMi0xNiAxNi0xNmwyNy4yIDBjMi43IDAgNC44LTIuMiA0LjgtNC44YzAtMS42LS44LTMuMS0yLjItNGwtMjkuNC0xOS42Yy0xMC4yLTYuOC0xNi40LTE4LjMtMTYuNC0zMC43em0tMTMzLjEtMzZjNi41LTIuMiAxMy43IC4xIDE3LjkgNS42TDI1NiAyMjkuM2wzNS4yLTQ2LjljNC4xLTUuNSAxMS4zLTcuOCAxNy45LTUuNnMxMC45IDguMyAxMC45IDE1LjJsMCA5NmMwIDguOC03LjIgMTYtMTYgMTZzLTE2LTcuMi0xNi0xNmwwLTQ4LTE5LjIgMjUuNmMtMyA0LTcuOCA2LjQtMTIuOCA2LjRzLTkuOC0yLjQtMTIuOC02LjRMMjI0IDI0MGwwIDQ4YzAgOC44LTcuMiAxNi0xNiAxNnMtMTYtNy4yLTE2LTE2bDAtOTZjMC02LjkgNC40LTEzIDEwLjktMTUuMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const CommentSms: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3C1.6 455.8 0 459.9 0 464c0 2.1 .4 4.1 1.2 6.1c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm96-27.2c0-20.3 16.5-36.8 36.8-36.8l19.2 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-19.2 0c-2.7 0-4.8 2.2-4.8 4.8c0 1.6 .8 3.1 2.2 4l29.4 19.6c10.2 6.8 16.4 18.3 16.4 30.7c0 20.3-16.5 36.8-36.8 36.8L112 304c-8.8 0-16-7.2-16-16s7.2-16 16-16l27.2 0c2.7 0 4.8-2.2 4.8-4.8c0-1.6-.8-3.1-2.2-4l-29.4-19.6C102.2 236.7 96 225.2 96 212.8zM192 192c0-6.9 4.4-13 10.9-15.2s13.7 .1 17.9 5.6L256 229.3l35.2-46.9c4.1-5.5 11.3-7.8 17.9-5.6s10.9 8.3 10.9 15.2l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48-19.2 25.6c-3 4-7.8 6.4-12.8 6.4s-9.8-2.4-12.8-6.4L224 240l0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96zm144 20.8c0-20.3 16.5-36.8 36.8-36.8l19.2 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-19.2 0c-2.7 0-4.8 2.2-4.8 4.8c0 1.6 .8 3.1 2.2 4l29.4 19.6c10.2 6.8 16.4 18.3 16.4 30.7c0 20.3-16.5 36.8-36.8 36.8L352 304c-8.8 0-16-7.2-16-16s7.2-16 16-16l27.2 0c2.7 0 4.8-2.2 4.8-4.8c0-1.6-.8-3.1-2.2-4l-29.4-19.6c-10.2-6.8-16.4-18.3-16.4-30.7z" />
            <path d="M132.8 176l19.2 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-19.2 0c-2.7 0-4.8 2.2-4.8 4.8c0 1.6 .8 3.1 2.2 4l29.4 19.6c10.2 6.8 16.4 18.3 16.4 30.7c0 20.3-16.5 36.8-36.8 36.8L112 304c-8.8 0-16-7.2-16-16s7.2-16 16-16l27.2 0c2.7 0 4.8-2.2 4.8-4.8c0-1.6-.8-3.1-2.2-4l-29.4-19.6C102.2 236.7 96 225.2 96 212.8c0-20.3 16.5-36.8 36.8-36.8zM336 212.8c0-20.3 16.5-36.8 36.8-36.8l19.2 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-19.2 0c-2.7 0-4.8 2.2-4.8 4.8c0 1.6 .8 3.1 2.2 4l29.4 19.6c10.2 6.8 16.4 18.3 16.4 30.7c0 20.3-16.5 36.8-36.8 36.8L352 304c-8.8 0-16-7.2-16-16s7.2-16 16-16l27.2 0c2.7 0 4.8-2.2 4.8-4.8c0-1.6-.8-3.1-2.2-4l-29.4-19.6c-10.2-6.8-16.4-18.3-16.4-30.7zm-133.1-36c6.5-2.2 13.7 .1 17.9 5.6L256 229.3l35.2-46.9c4.1-5.5 11.3-7.8 17.9-5.6s10.9 8.3 10.9 15.2l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48-19.2 25.6c-3 4-7.8 6.4-12.8 6.4s-9.8-2.4-12.8-6.4L224 240l0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-6.9 4.4-13 10.9-15.2z" />
    </Icon>
);

export default CommentSms;