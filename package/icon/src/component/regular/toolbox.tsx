
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `toolbox` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/toolbox?s=regular toolbox}
 * @preview ![toolbox](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDIuNjI3IDIxNC42MjdMNDI1LjM3MyAxMzcuMzczQzQxOS4zNzEgMTMxLjM3MSA0MTEuMjMyIDEyOCA0MDIuNzQ2IDEyOEgzODRWODhDMzg0IDU3LjEyNSAzNTguODc1IDMyIDMyOCAzMkgxODRDMTUzLjEyNSAzMiAxMjggNTcuMTI1IDEyOCA4OFYxMjhIMTA5LjI1NEMxMDAuNzY4IDEyOCA5Mi42MjkgMTMxLjM3MSA4Ni42MjcgMTM3LjM3M0w5LjM3MyAyMTQuNjI3QzMuMzcxIDIyMC42MjkgMCAyMjguNzY4IDAgMjM3LjI1NFY0MTZDMCA0NTEuMzQ2IDI4LjY1NCA0ODAgNjQgNDgwSDQ0OEM0ODMuMzQ2IDQ4MCA1MTIgNDUxLjM0NiA1MTIgNDE2VjIzNy4yNTRDNTEyIDIyOC43NjggNTA4LjYyOSAyMjAuNjI5IDUwMi42MjcgMjE0LjYyN1pNMTc2IDg4QzE3NiA4My41OTQgMTc5LjU5NCA4MCAxODQgODBIMzI4QzMzMi40MDYgODAgMzM2IDgzLjU5NCAzMzYgODhWMTI4SDE3NlY4OFpNMTE1Ljg4MyAxNzZIMzk2LjExOUw0NjQgMjQzLjg4M1YyOTZIMzc2VjI4MEMzNzYgMjY2Ljc0NSAzNjUuMjU1IDI1NiAzNTIgMjU2SDM1MkMzMzguNzQ1IDI1NiAzMjggMjY2Ljc0NSAzMjggMjgwVjI5NkgxODRWMjgwQzE4NCAyNjYuNzQ1IDE3My4yNTUgMjU2IDE2MCAyNTZIMTYwQzE0Ni43NDUgMjU2IDEzNiAyNjYuNzQ1IDEzNiAyODBWMjk2SDQ4VjI0My44ODNMMTE1Ljg4MyAxNzZaTTQ0OCA0MzJINjRDNTUuMTYzIDQzMiA0OCA0MjQuODM3IDQ4IDQxNlYzNDRIMTM2VjM2MEMxMzYgMzczLjI1NSAxNDYuNzQ1IDM4NCAxNjAgMzg0SDE2MEMxNzMuMjU1IDM4NCAxODQgMzczLjI1NSAxODQgMzYwVjM0NEgzMjhWMzYwQzMyOCAzNzMuMjU1IDMzOC43NDUgMzg0IDM1MiAzODRIMzUyQzM2NS4yNTUgMzg0IDM3NiAzNzMuMjU1IDM3NiAzNjBWMzQ0SDQ2NFY0MTZDNDY0IDQyNC44MzcgNDU2LjgzNyA0MzIgNDQ4IDQzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Toolbox(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M502.627 214.627L425.373 137.373C419.371 131.371 411.232 128 402.746 128H384V88C384 57.125 358.875 32 328 32H184C153.125 32 128 57.125 128 88V128H109.254C100.768 128 92.629 131.371 86.627 137.373L9.373 214.627C3.371 220.629 0 228.768 0 237.254V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V237.254C512 228.768 508.629 220.629 502.627 214.627ZM176 88C176 83.594 179.594 80 184 80H328C332.406 80 336 83.594 336 88V128H176V88ZM115.883 176H396.119L464 243.883V296H376V280C376 266.745 365.255 256 352 256H352C338.745 256 328 266.745 328 280V296H184V280C184 266.745 173.255 256 160 256H160C146.745 256 136 266.745 136 280V296H48V243.883L115.883 176ZM448 432H64C55.163 432 48 424.837 48 416V344H136V360C136 373.255 146.745 384 160 384H160C173.255 384 184 373.255 184 360V344H328V360C328 373.255 338.745 384 352 384H352C365.255 384 376 373.255 376 360V344H464V416C464 424.837 456.837 432 448 432Z" />
        </Icon>
    </>
}