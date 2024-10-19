
import { Icon } from "../../index";

/**
 * A component that renders the `shower` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shower?s=solid shower}
 * @preview ![shower](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggMzg0QzI3MC4zMjYgMzg0IDI1NiAzOTguMzI2IDI1NiA0MTZDMjU2IDQzMy42NzIgMjcwLjMyNiA0NDggMjg4IDQ0OFMzMjAgNDMzLjY3MiAzMjAgNDE2QzMyMCAzOTguMzI2IDMwNS42NzQgMzg0IDI4OCAzODRaTTQxNiAyNTZDMzk4LjMyNiAyNTYgMzg0IDI3MC4zMjYgMzg0IDI4OEMzODQgMzA1LjY3MiAzOTguMzI2IDMyMCA0MTYgMzIwUzQ0OCAzMDUuNjcyIDQ0OCAyODhDNDQ4IDI3MC4zMjYgNDMzLjY3NCAyNTYgNDE2IDI1NlpNNDgwIDE5MkM0NjIuMzI2IDE5MiA0NDggMjA2LjMyNiA0NDggMjI0QzQ0OCAyNDEuNjcyIDQ2Mi4zMjYgMjU2IDQ4MCAyNTZTNTEyIDI0MS42NzIgNTEyIDIyNEM1MTIgMjA2LjMyNiA0OTcuNjc0IDE5MiA0ODAgMTkyWk0yODggMzIwQzI4OCAzMDIuMzI2IDI3My42NzQgMjg4IDI1NiAyODhTMjI0IDMwMi4zMjYgMjI0IDMyMEMyMjQgMzM3LjY3MiAyMzguMzI2IDM1MiAyNTYgMzUyUzI4OCAzMzcuNjcyIDI4OCAzMjBaTTMyMCAyMjRDMzAyLjMyNiAyMjQgMjg4IDIzOC4zMjYgMjg4IDI1NkMyODggMjczLjY3MiAzMDIuMzI2IDI4OCAzMjAgMjg4UzM1MiAyNzMuNjcyIDM1MiAyNTZDMzUyIDIzOC4zMjYgMzM3LjY3NCAyMjQgMzIwIDIyNFpNMzg0IDIyNEM0MDEuNjc0IDIyNCA0MTYgMjA5LjY3MiA0MTYgMTkyQzQxNiAxNzQuMzI2IDQwMS42NzQgMTYwIDM4NCAxNjBTMzUyIDE3NC4zMjYgMzUyIDE5MkMzNTIgMjA5LjY3MiAzNjYuMzI2IDIyNCAzODQgMjI0Wk0zNTIgMzIwQzMzNC4zMjYgMzIwIDMyMCAzMzQuMzI2IDMyMCAzNTJDMzIwIDM2OS42NzIgMzM0LjMyNiAzODQgMzUyIDM4NFMzODQgMzY5LjY3MiAzODQgMzUyQzM4NCAzMzQuMzI2IDM2OS42NzQgMzIwIDM1MiAzMjBaTTM0Ny4zMTQgOTEuMzEyTDMzNi4wMDQgODAuMDA0QzMyOS43NTYgNzMuNzU2IDMxOS42MjUgNzMuNzU2IDMxMy4zNzcgODAuMDA0TDMwNi43NDYgODYuNjM1QzI3MS41OTQgNjAuMzQ4IDIyNC45MzcgNTcuNDc1IDE4Ny4xMDUgNzcuODU1TDE3MC41IDYxLjI1QzEzMi4xOTUgMjIuOTQ1IDYzLjY1NCAxOC4zMjYgMjEuOTc3IDcxLjE2MkM3LjAyNyA5MC4xMTEgMCAxMTQuMjY4IDAgMTM4LjQwMlY0NjRDMCA0NzIuODM2IDcuMTY0IDQ4MCAxNiA0ODBINDhDNTYuODM2IDQ4MCA2NCA0NzIuODM2IDY0IDQ2NFYxMzEuODc1QzY0IDExMi4wOTQgODAuMDk0IDk2IDk5Ljg3NSA5NkMxMDkuMzEzIDk2IDExOC41NjMgOTkuODI4IDEyNS4yNSAxMDYuNUwxNDEuODU3IDEyMy4xMDdDMTIxLjQ3NyAxNjAuOTQxIDEyNC4zNDggMjA3LjU5NiAxNTAuNjM1IDI0Mi43NDZMMTQ0LjAwNCAyNDkuMzc3QzEzNy43NTYgMjU1LjYyNSAxMzcuNzU2IDI2NS43NTYgMTQ0LjAwNCAyNzIuMDA0TDE1NS4zMTQgMjgzLjMxM0MxNjEuNTYzIDI4OS41NjMgMTcxLjY5MyAyODkuNTYzIDE3Ny45NDEgMjgzLjMxM0wzNDcuMzE0IDExMy45NDFDMzUzLjU2MiAxMDcuNjkxIDM1My41NjIgOTcuNTYyIDM0Ny4zMTQgOTEuMzEyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Shower: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 384C270.326 384 256 398.326 256 416C256 433.672 270.326 448 288 448S320 433.672 320 416C320 398.326 305.674 384 288 384ZM416 256C398.326 256 384 270.326 384 288C384 305.672 398.326 320 416 320S448 305.672 448 288C448 270.326 433.674 256 416 256ZM480 192C462.326 192 448 206.326 448 224C448 241.672 462.326 256 480 256S512 241.672 512 224C512 206.326 497.674 192 480 192ZM288 320C288 302.326 273.674 288 256 288S224 302.326 224 320C224 337.672 238.326 352 256 352S288 337.672 288 320ZM320 224C302.326 224 288 238.326 288 256C288 273.672 302.326 288 320 288S352 273.672 352 256C352 238.326 337.674 224 320 224ZM384 224C401.674 224 416 209.672 416 192C416 174.326 401.674 160 384 160S352 174.326 352 192C352 209.672 366.326 224 384 224ZM352 320C334.326 320 320 334.326 320 352C320 369.672 334.326 384 352 384S384 369.672 384 352C384 334.326 369.674 320 352 320ZM347.314 91.312L336.004 80.004C329.756 73.756 319.625 73.756 313.377 80.004L306.746 86.635C271.594 60.348 224.937 57.475 187.105 77.855L170.5 61.25C132.195 22.945 63.654 18.326 21.977 71.162C7.027 90.111 0 114.268 0 138.402V464C0 472.836 7.164 480 16 480H48C56.836 480 64 472.836 64 464V131.875C64 112.094 80.094 96 99.875 96C109.313 96 118.563 99.828 125.25 106.5L141.857 123.107C121.477 160.941 124.348 207.596 150.635 242.746L144.004 249.377C137.756 255.625 137.756 265.756 144.004 272.004L155.314 283.313C161.563 289.563 171.693 289.563 177.941 283.313L347.314 113.941C353.562 107.691 353.562 97.562 347.314 91.312Z" />
    </Icon>
);

export default Shower;