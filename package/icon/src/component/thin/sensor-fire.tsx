
import { Icon } from "../../index";

/**
 * A component that renders the `sensor-fire` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sensor-fire?s=thin sensor-fire}
 * @preview ![sensor-fire](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzIuMjUgMjc5LjIxOUM1NjkuNjU2IDI3NC4xODcgNTY2LjgxMiAyNjkgNTYzLjU3OCAyNjMuNzE5QzU2Mi4yNSAyNjEuNTMxIDU1OS45NjkgMjYwLjEyNSA1NTcuNDM4IDI1OS45MDZDNTU0Ljg5MSAyNTkuNTMxIDU1Mi40MzggMjYwLjY1NiA1NTAuNzM0IDI2Mi41OTRMNTEzLjA5NCAzMDUuNDY5QzQ5Ni4xNDEgMjgzLjg3NSA0NDkuMDMxIDIyMy44NzUgNDQ0LjcwMyAyMTguODEzQzQ0My4xODggMjE3LjAzMSA0NDAuOTY5IDIxNiA0MzguNjI1IDIxNkg0MzguNTc4QzQzNi4yMTkgMjE2IDQzMy45ODQgMjE3LjA2MiA0MzIuNDg0IDIxOC44NzVDMzk3LjM0NCAyNjEuMDMxIDM3NiAyODkgMzc2IDMyMi4xMjVDMzc2IDM4MS4xNTYgNDIwLjYyNSA0MjQgNDgyLjEyNSA0MjRDNTA0Ljc5NyA0MjQgNTI2LjQwNiA0MTcuMjE5IDU0NC42MDkgNDA0LjQwNkM1ODMuNSAzNzcuMTg4IDU5NS4zNzUgMzIzLjM0NCA1NzIuMjUgMjc5LjIxOVpNNTM1LjQyMiAzOTEuMzEyQzUzNS40MDYgMzkxLjMxMiA1MzUuNDA2IDM5MS4zMTIgNTM1LjM5MSAzOTEuMzQ0QzUxOS45MDYgNDAyLjI1IDUwMS40ODQgNDA4IDQ4Mi4xMjUgNDA4QzQyOS4wNjIgNDA4IDM5MiAzNzIuNjg4IDM5MiAzMjIuMTI1QzM5MiAyOTguMDMxIDQwNS44MTIgMjc2LjQwNiA0MzguNTMxIDIzNi42NTZDNDUyLjYwOSAyNTQuMzQ0IDQ4Ni45NjkgMjk4LjA5NCA1MDYuNDUzIDMyMi45MzhDNTA3LjkyMiAzMjQuODEzIDUxMC4xNTYgMzI1LjkzOCA1MTIuNTMxIDMyNkM1MTQuOTIyIDMyNi4xMjUgNTE3LjE4OCAzMjUuMDYzIDUxOC43NjYgMzIzLjI4MUw1NTUuMzkxIDI4MS41NjNDNTU2LjI5NyAyODMuMjUgNTU3LjE4NyAyODQuOTA2IDU1OC4wMzEgMjg2LjU5NEM1NzcuNDY5IDMyMy42ODggNTY3Ljc1IDM2OC43MTkgNTM1LjQyMiAzOTEuMzEyWk01NTIuOTY5IDE1Ni41MzFDNTQ5LjkwNiAxNTMuNzE5IDU0NS4yMDMgMTUzLjc4MSA1NDIuMTQxIDE1Ni41NjNDNTMwLjY3MiAxNjcuMTI1IDUxOS44MjggMTc4LjM0NCA1MDkuNzk3IDE4OS45MzhDNDkxLjI2NiAxNjUuODQ0IDQ3MC4zMTIgMTQzLjA2MyA0NDcuMzkxIDEyMi4wOTRDNDQ0LjM1OSAxMTkuMjgxIDQzOS42NTYgMTE5LjI4MSA0MzYuNTk0IDEyMi4wOTRDMzY5LjAzMSAxODQuMTI1IDMyMCAyNjYuMTU2IDMyMCAzMTcuMTU2QzMyMCA0MDYuOTM4IDM5MS43ODEgNDgwIDQ4MCA0ODBTNjQwIDQwNi45MzggNjQwIDMxNy4xNTZDNjQwIDI3OSA2MDQuMjY2IDIwMy42NTYgNTUyLjk2OSAxNTYuNTMxWk00ODAgNDY0QzQwMC41OTQgNDY0IDMzNiAzOTguMTI1IDMzNiAzMTcuMTU2QzMzNiAyNzIuMjgxIDM4MS4yMDMgMTk2LjY1NiA0NDIuMDE2IDEzOC45MzhDNDY0LjU3OCAxNjAuMTU2IDQ4NS4wNzggMTgzLjE4OCA1MDMuMDE2IDIwNy41MzFDNTA0LjQ4NCAyMDkuNTMxIDUwNi43ODEgMjEwLjcxOSA1MDkuMjUgMjEwLjc4MUM1MTEuNTYyIDIxMC40NjkgNTE0LjA3OCAyMDkuNzUgNTE1LjY0MSAyMDcuODQ0QzUyNS40MjIgMTk1LjkwNiA1MzYuMTI1IDE4NC4zNzUgNTQ3LjUzMSAxNzMuNDM4QzU5MS42NTYgMjE2Ljc4MSA2MjQgMjgzLjcxOSA2MjQgMzE3LjE1NkM2MjQgMzk4LjEyNSA1NTkuNDA2IDQ2NCA0ODAgNDY0Wk0zNDQgNDY0SDY0QzM3LjQ5IDQ2NCAxNiA0NDIuNTEgMTYgNDE2Vjk2QzE2IDY5LjQ5IDM3LjQ5IDQ4IDY0IDQ4SDM4NEM0MDguMTU2IDQ4IDQyOC4yMDMgNjUuOTM4IDQzMS41MiA4OS4xOTFDNDMyLjA3NiA5My4xMDQgNDM1LjQyIDk2IDQzOS4zNzEgOTZDNDQ0LjIxNyA5NiA0NDguMDQxIDkxLjcwMyA0NDcuMzU5IDg2LjkwNkM0NDIuOTQzIDU1Ljg2NSA0MTYuMjYgMzIgMzg0IDMySDY0QzI4LjY1NCAzMiAwIDYwLjY1NCAwIDk2VjQxNkMwIDQ1MS4zNDYgMjguNjU0IDQ4MCA2NCA0ODBIMzQ0QzM0OC40MTggNDgwIDM1MiA0NzYuNDE4IDM1MiA0NzJTMzQ4LjQxOCA0NjQgMzQ0IDQ2NFpNMjA2LjU5NiAxMDRWMjgwQzIwNi41OTYgMjg0LjQwNiAyMTAuMTg5IDI4OCAyMTQuNTk2IDI4OFMyMjIuNTk2IDI4NC40MDYgMjIyLjU5NiAyODBWMTA0QzIyMi41OTYgOTkuNTk0IDIxOS4wMDIgOTYgMjE0LjU5NiA5NlMyMDYuNTk2IDk5LjU5NCAyMDYuNTk2IDEwNFpNMTQyLjU5NiAxMDRWMjgwQzE0Mi41OTYgMjg0LjQwNiAxNDYuMTg5IDI4OCAxNTAuNTk2IDI4OFMxNTguNTk2IDI4NC40MDYgMTU4LjU5NiAyODBWMTA0QzE1OC41OTYgOTkuNTk0IDE1NS4wMDIgOTYgMTUwLjU5NiA5NlMxNDIuNTk2IDk5LjU5NCAxNDIuNTk2IDEwNFpNNzguNTk2IDEwNFYyODBDNzguNTk2IDI4NC40MDYgODIuMTg5IDI4OCA4Ni41OTYgMjg4Uzk0LjU5NiAyODQuNDA2IDk0LjU5NiAyODBWMTA0Qzk0LjU5NiA5OS41OTQgOTEuMDAyIDk2IDg2LjU5NiA5NlM3OC41OTYgOTkuNTk0IDc4LjU5NiAxMDRaIi8+PC9zdmc+|width=32|height=32)
 */
const SensorFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M572.25 279.219C569.656 274.187 566.812 269 563.578 263.719C562.25 261.531 559.969 260.125 557.438 259.906C554.891 259.531 552.438 260.656 550.734 262.594L513.094 305.469C496.141 283.875 449.031 223.875 444.703 218.813C443.188 217.031 440.969 216 438.625 216H438.578C436.219 216 433.984 217.062 432.484 218.875C397.344 261.031 376 289 376 322.125C376 381.156 420.625 424 482.125 424C504.797 424 526.406 417.219 544.609 404.406C583.5 377.188 595.375 323.344 572.25 279.219ZM535.422 391.312C535.406 391.312 535.406 391.312 535.391 391.344C519.906 402.25 501.484 408 482.125 408C429.062 408 392 372.688 392 322.125C392 298.031 405.812 276.406 438.531 236.656C452.609 254.344 486.969 298.094 506.453 322.938C507.922 324.813 510.156 325.938 512.531 326C514.922 326.125 517.188 325.063 518.766 323.281L555.391 281.563C556.297 283.25 557.187 284.906 558.031 286.594C577.469 323.688 567.75 368.719 535.422 391.312ZM552.969 156.531C549.906 153.719 545.203 153.781 542.141 156.563C530.672 167.125 519.828 178.344 509.797 189.938C491.266 165.844 470.312 143.063 447.391 122.094C444.359 119.281 439.656 119.281 436.594 122.094C369.031 184.125 320 266.156 320 317.156C320 406.938 391.781 480 480 480S640 406.938 640 317.156C640 279 604.266 203.656 552.969 156.531ZM480 464C400.594 464 336 398.125 336 317.156C336 272.281 381.203 196.656 442.016 138.938C464.578 160.156 485.078 183.188 503.016 207.531C504.484 209.531 506.781 210.719 509.25 210.781C511.562 210.469 514.078 209.75 515.641 207.844C525.422 195.906 536.125 184.375 547.531 173.438C591.656 216.781 624 283.719 624 317.156C624 398.125 559.406 464 480 464ZM344 464H64C37.49 464 16 442.51 16 416V96C16 69.49 37.49 48 64 48H384C408.156 48 428.203 65.938 431.52 89.191C432.076 93.104 435.42 96 439.371 96C444.217 96 448.041 91.703 447.359 86.906C442.943 55.865 416.26 32 384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H344C348.418 480 352 476.418 352 472S348.418 464 344 464ZM206.596 104V280C206.596 284.406 210.189 288 214.596 288S222.596 284.406 222.596 280V104C222.596 99.594 219.002 96 214.596 96S206.596 99.594 206.596 104ZM142.596 104V280C142.596 284.406 146.189 288 150.596 288S158.596 284.406 158.596 280V104C158.596 99.594 155.002 96 150.596 96S142.596 99.594 142.596 104ZM78.596 104V280C78.596 284.406 82.189 288 86.596 288S94.596 284.406 94.596 280V104C94.596 99.594 91.002 96 86.596 96S78.596 99.594 78.596 104Z" />
    </Icon>
);

export default SensorFire;