
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hockey-sticks` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hockey-sticks?s=regular hockey-sticks}
 * @preview ![hockey-sticks](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01OTIuODYzIDMwMi44NzFINDM1LjgzNkw0MTEuMzMgMzUxLjI2Nkw1MjggMzUyVjQ2NEw0MTcuNjk1IDQ2My43MzRDMzk3LjY1IDQ2My43MzQgMzc5LjE0NSA0NTUuMjIzIDM2NS45OSA0NDAuNzk3TDM1Ni4zNTkgNDU5LjgxMkMzNTIuMTg5IDQ2OC4zNTIgMzQ3LjA3OCA0NzYuMTQ1IDM0MS41NzQgNDgzLjU3NEMzNjIuNDI0IDUwMS42MjkgMzg5LjEwOSA1MTIgNDE3LjY5NSA1MTJINTkyLjg2M0M2MTguODk2IDUxMiA2NDAgNDkwLjM5MSA2NDAgNDYzLjczNFYzNTEuMTMzQzY0MCAzMjQuNDg0IDYxOC44OTYgMzAyLjg3MSA1OTIuODYzIDMwMi44NzFaTTU5Mi44NjMgNDYzLjczNEg1NjBWMzUxLjEzM0g1OTIuODYzVjQ2My43MzRaTTIyMS44OTEgMjY3LjA0N0wyNDguNTQxIDIxNC44MjhMMTc1LjEzNyA2OS44OTFMMjE3LjM2MyA0OC4yNzNMMjc1LjQ1MSAxNjIuMTAyTDMwMi4wNDUgMTA5Ljk5MkwyNTkuMTQzIDI1LjkyMkMyNTAuNzQgOS40NTcgMjM0LjMzNiAwIDIxNy4zMjggMEMyMTAuMjQgMCAyMDMuMDQ5IDEuNjQ1IDE5Ni4yODcgNS4xMDVMMTU0LjA2MSAyNi43MTlDMTQyLjc3IDMyLjQ5NiAxMzQuMjE1IDQyLjY3MiAxMzAuMzEyIDU0Ljk2MUMxMjYuNDA2IDY3LjI1IDEyNy40OCA4MC42MzMgMTMzLjI5MyA5Mi4xMDlMMjIxLjg5MSAyNjcuMDQ3Wk01MDkuNjg4IDU0Ljk2MUM1MDUuNzg1IDQyLjY3MiA0OTcuMjMgMzIuNDk2IDQ4NS45MzkgMjYuNzE5TDQ0My43MTMgNS4xMDVDNDM2Ljk1MSAxLjY0NSA0MjkuNzYgMCA0MjIuNjcyIDBDNDA1LjY2NCAwIDM4OS4yNiA5LjQ1NyAzODAuODU3IDI1LjkyMkwyMzkuNTI1IDMwMi44NzFINDcuMTM3QzIxLjEwNCAzMDIuODcxIDAgMzI0LjQ4NCAwIDM1MS4xMzNWNDYzLjczNEMwIDQ5MC4zOTEgMjEuMTA0IDUxMiA0Ny4xMzcgNTEySDIyMi4zMDVDMjY3LjMwNSA1MTIgMzA3LjczIDQ4Ni40NjEgMzI3LjgwNyA0NDUuMzUyTDUwNi43MDcgOTIuMTA5QzUxMi41MiA4MC42MzMgNTEzLjU5NCA2Ny4yNSA1MDkuNjg4IDU0Ljk2MVpNODAgNDYzLjczNEg0Ny4xMzdWMzUxLjEzM0g4MFY0NjMuNzM0Wk0yODUuNjQ1IDQyMy43N0MyNzMuNjE1IDQ0OC40MDIgMjQ5LjMxMSA0NjMuNzM0IDIyMi4zMDUgNDYzLjczNEwxMTIgNDY0VjM1MkwyNDguOTQxIDM1MS4xMzNDMjYwLjk3MSAzNTEuMTMzIDI3MS43NzMgMzQ0LjM0OCAyNzYuOTMgMzMzLjc5N0w0MjIuNjM3IDQ4LjI3M0w0NjQuODYzIDY5Ljg5MUwyODUuNjQ1IDQyMy43N1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HockeySticks(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M592.863 302.871H435.836L411.33 351.266L528 352V464L417.695 463.734C397.65 463.734 379.145 455.223 365.99 440.797L356.359 459.812C352.189 468.352 347.078 476.145 341.574 483.574C362.424 501.629 389.109 512 417.695 512H592.863C618.896 512 640 490.391 640 463.734V351.133C640 324.484 618.896 302.871 592.863 302.871ZM592.863 463.734H560V351.133H592.863V463.734ZM221.891 267.047L248.541 214.828L175.137 69.891L217.363 48.273L275.451 162.102L302.045 109.992L259.143 25.922C250.74 9.457 234.336 0 217.328 0C210.24 0 203.049 1.645 196.287 5.105L154.061 26.719C142.77 32.496 134.215 42.672 130.312 54.961C126.406 67.25 127.48 80.633 133.293 92.109L221.891 267.047ZM509.688 54.961C505.785 42.672 497.23 32.496 485.939 26.719L443.713 5.105C436.951 1.645 429.76 0 422.672 0C405.664 0 389.26 9.457 380.857 25.922L239.525 302.871H47.137C21.104 302.871 0 324.484 0 351.133V463.734C0 490.391 21.104 512 47.137 512H222.305C267.305 512 307.73 486.461 327.807 445.352L506.707 92.109C512.52 80.633 513.594 67.25 509.688 54.961ZM80 463.734H47.137V351.133H80V463.734ZM285.645 423.77C273.615 448.402 249.311 463.734 222.305 463.734L112 464V352L248.941 351.133C260.971 351.133 271.773 344.348 276.93 333.797L422.637 48.273L464.863 69.891L285.645 423.77Z" />
        </Icon>
    </>
}