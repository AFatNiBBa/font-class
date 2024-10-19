
import { Icon } from "../../index";

/**
 * A component that renders the `tree-christmas` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tree-christmas?s=thin tree-christmas}
 * @preview ![tree-christmas](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDMuOTk4IDQxNi4wMDJDMzEyLjgzIDQxNi4wMDIgMzE5Ljk5OCA0MDguODM0IDMxOS45OTggNDAwLjAwMlMzMTIuODMgMzg0LjAwNCAzMDMuOTk4IDM4NC4wMDRTMjg4IDM5MS4xNyAyODggNDAwLjAwMlMyOTUuMTY2IDQxNi4wMDIgMzAzLjk5OCA0MTYuMDAyWk0xODQuOTIyIDk0LjQ5NkwyMjIuNjA5IDExMy40MDJMMjQxLjUzMSAxNTEuMTA0QzI0NC4zMTIgMTU2LjYwNCAyNDkuODQ0IDE2MC4wMSAyNTYgMTYwLjAxUzI2Ny42ODcgMTU2LjYwNCAyNzAuNDg0IDE1MS4wODhMMjg5LjM5MSAxMTMuNDAyTDMyNy4wNjIgOTQuNDk2QzMzMi41NzggOTEuNzMgMzM2IDg2LjE4NCAzMzYgODAuMDEyQzMzNiA3My44NDIgMzMyLjU3OCA2OC4yOTUgMzI3LjA3OCA2NS41MjlMMjg5LjM5MSA0Ni42MjNMMjcwLjQ2OSA4LjkzOEMyNjcuNzAzIDMuNDIyIDI2Mi4xNTYgMCAyNTYgMEMyNTUuOTg0IDAgMjU1Ljk4NCAwIDI1NS45ODQgMEMyNDkuODEyIDAuMDE2IDI0NC4yNjYgMy40MzggMjQxLjUxNiA4LjkzOEwyMjIuNjA5IDQ2LjYyM0wxODQuOTM3IDY1LjUyOUMxNzkuNDIyIDY4LjI5NSAxNzYgNzMuODQyIDE3NiA4MC4wMTJDMTc2IDg2LjE4NCAxNzkuNDIyIDkxLjczIDE4NC45MjIgOTQuNDk2Wk0yMzQuNTE2IDU4LjUyOUwyNTYuMTcyIDE2LjEyM0wyNzcuNDg0IDU4LjUyOUwzMTkuODkxIDgwLjE4NEwyNzcuNDg0IDEwMS40OTZMMjU1LjgyOCAxNDMuOTAyTDIzNC41MTYgMTAxLjQ5NkwxOTIuMTA5IDgwLjE4NEwyMzQuNTE2IDU4LjUyOVpNMjA4IDI1Ni4wMDZDMTk5LjE2OCAyNTYuMDA2IDE5MiAyNjMuMTc0IDE5MiAyNzIuMDA0QzE5MiAyODAuODM4IDE5OS4xNjggMjg4LjAwNiAyMDggMjg4LjAwNlMyMjMuOTk4IDI4MC44MzggMjIzLjk5OCAyNzIuMDA0QzIyMy45OTggMjYzLjE3NCAyMTYuODMyIDI1Ni4wMDYgMjA4IDI1Ni4wMDZaTTQ3MS42MzcgNDU1LjYyN0wzODEuNzY5IDM1Mi4wMDRINDE3Ljc2NkM0NDMuMzg5IDM1Mi4wMDQgNDU3LjI2NCAzMjIuNzU2IDQ0MS4wMTQgMzAzLjUwNkwzMTUuMjE3IDE0Ni44NzNDMzA4LjYzOSAxMzkuMDIxIDI5Ni4wNTEgMTQ4LjkwNiAzMDIuOTUxIDE1Ny4xNDVMNDI4Ljc4NyAzMTMuODI2QzQzMy43MjggMzE5LjY4IDQzMS43ODMgMzI1LjY0OCA0MzAuNzE3IDMyNy45NDNDNDI5Ljg0IDMyOS44MzYgNDI2LjMwOSAzMzYuMDA0IDQxNy43NjYgMzM2LjAwNEgzNDYuNzE1QzM4Ni4wODIgMzgxLjM5NiAzNTMuNDIyIDM0My43MzYgNDU5LjU1MyA0NjYuMTExQzQ2Ni42NTIgNDc0LjI5MyA0NjMuNDE0IDQ4My4yMzIgNDYyLjI1MiA0ODUuNzc3QzQ2MS4xNTggNDg4LjE3NiA0NTYuODA5IDQ5NiA0NDYuNzY0IDQ5Nkg2NS4xN0M1NS4xNjIgNDk2IDUwLjgyNCA0ODguMTk1IDQ5LjczNCA0ODUuODAzQzQ4LjU3NiA0ODMuMjY2IDQ1LjM1NSA0NzQuMzQ0IDUyLjUxIDQ2Ni4xMDdDOTUuMDI3IDQxNy4wODQgMTIzLjA5NCAzODQuNzIxIDE2NS4zNDQgMzM2LjAwNEg5NC4yOTNDODUuNzUgMzM2LjAwNCA4Mi4yMTkgMzI5LjgzNiA4MS4zNDIgMzI3Ljk0M0M4MC4yNzUgMzI1LjY0OCA3OC4zMyAzMTkuNjggODMuNDE2IDMxMy42NTJMMjA2LjcyNiAxNTcuMDgyQzIxMy41MTYgMTQ4LjgwNSAyMDAuODY3IDEzOC45OTggMTk0LjM1NSAxNDYuOTM2TDcxLjA0NSAzMDMuNTA2QzU0Ljc5NSAzMjIuNzU2IDY4LjY3IDM1Mi4wMDQgOTQuMjkzIDM1Mi4wMDRIMTMwLjI4OUw0MC40MjIgNDU1LjYyN0MyMS40MjQgNDc3LjUgMzYuNjcyIDUxMiA2NS4xNyA1MTJINDQ2Ljc2NEM0NzUuMzg3IDUxMiA0OTAuNTEgNDc3LjM3NSA0NzEuNjM3IDQ1NS42MjdaIi8+PC9zdmc+|width=32|height=32)
 */
const TreeChristmas: typeof Icon = x => (
    <Icon {...x}>
        <path d="M303.998 416.002C312.83 416.002 319.998 408.834 319.998 400.002S312.83 384.004 303.998 384.004S288 391.17 288 400.002S295.166 416.002 303.998 416.002ZM184.922 94.496L222.609 113.402L241.531 151.104C244.312 156.604 249.844 160.01 256 160.01S267.687 156.604 270.484 151.088L289.391 113.402L327.062 94.496C332.578 91.73 336 86.184 336 80.012C336 73.842 332.578 68.295 327.078 65.529L289.391 46.623L270.469 8.938C267.703 3.422 262.156 0 256 0C255.984 0 255.984 0 255.984 0C249.812 0.016 244.266 3.438 241.516 8.938L222.609 46.623L184.937 65.529C179.422 68.295 176 73.842 176 80.012C176 86.184 179.422 91.73 184.922 94.496ZM234.516 58.529L256.172 16.123L277.484 58.529L319.891 80.184L277.484 101.496L255.828 143.902L234.516 101.496L192.109 80.184L234.516 58.529ZM208 256.006C199.168 256.006 192 263.174 192 272.004C192 280.838 199.168 288.006 208 288.006S223.998 280.838 223.998 272.004C223.998 263.174 216.832 256.006 208 256.006ZM471.637 455.627L381.769 352.004H417.766C443.389 352.004 457.264 322.756 441.014 303.506L315.217 146.873C308.639 139.021 296.051 148.906 302.951 157.145L428.787 313.826C433.728 319.68 431.783 325.648 430.717 327.943C429.84 329.836 426.309 336.004 417.766 336.004H346.715C386.082 381.396 353.422 343.736 459.553 466.111C466.652 474.293 463.414 483.232 462.252 485.777C461.158 488.176 456.809 496 446.764 496H65.17C55.162 496 50.824 488.195 49.734 485.803C48.576 483.266 45.355 474.344 52.51 466.107C95.027 417.084 123.094 384.721 165.344 336.004H94.293C85.75 336.004 82.219 329.836 81.342 327.943C80.275 325.648 78.33 319.68 83.416 313.652L206.726 157.082C213.516 148.805 200.867 138.998 194.355 146.936L71.045 303.506C54.795 322.756 68.67 352.004 94.293 352.004H130.289L40.422 455.627C21.424 477.5 36.672 512 65.17 512H446.764C475.387 512 490.51 477.375 471.637 455.627Z" />
    </Icon>
);

export default TreeChristmas;