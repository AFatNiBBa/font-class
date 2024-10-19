
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `badge-sheriff` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/badge-sheriff?s=light badge-sheriff}
 * @preview ![badge-sheriff](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MjAuNCAyODMuNzMyQzQxOS42NTIgMjgzLjczMiA0MTguOSAyODMuNzUgNDE4LjE0NSAyODMuNzgxTDQwMS40NzUgMjU2TDQxOC4xNDUgMjI4LjIxN0M0MTguOSAyMjguMjUgNDE5LjY1MiAyMjguMjY2IDQyMC40IDIyOC4yNjZDNDU0LjUxNCAyMjguMjY2IDQ4Mi4yNjYgMjAwLjUxNCA0ODIuMjY2IDE2Ni40UzQ1NC41MTQgMTA0LjUzMyA0MjAuNCAxMDQuNTMzQzM5OC42MTkgMTA0LjUzMyAzNzguNjkzIDExNi4xNDYgMzY3LjY0NSAxMzQuNEgzMjguNTE4TDMwNi40NDEgOTcuNjA1QzMxMy44OTMgODcuMjE1IDMxOCA3NC43NSAzMTggNjEuODY1QzMxOCAyNy43NTIgMjkwLjI0NiAwIDI1Ni4xMzMgMFMxOTQuMjY2IDI3Ljc1MiAxOTQuMjY2IDYxLjg2NUMxOTQuMjY2IDc0Ljc1IDE5OC4zNzUgODcuMjE1IDIwNS44MjYgOTcuNjA1TDE4My43NDggMTM0LjRIMTQ0LjYyM0MxMzMuNTcyIDExNi4xNDggMTEzLjY0OCAxMDQuNTMzIDkxLjg2NyAxMDQuNTMzQzU3Ljc1MiAxMDQuNTMzIDMwIDEzMi4yODcgMzAgMTY2LjRTNTcuNzUyIDIyOC4yNjYgOTEuODY3IDIyOC4yNjZDOTIuNjEzIDIyOC4yNjYgOTMuMzY1IDIyOC4yNSA5NC4xMjEgMjI4LjIxN0wxMTAuNzkxIDI1Nkw5NC4xMjEgMjgzLjc4MUM5My4zNjUgMjgzLjc1IDkyLjYxMyAyODMuNzMyIDkxLjg2NyAyODMuNzMyQzU3Ljc1MiAyODMuNzMyIDMwIDMxMS40ODYgMzAgMzQ1LjZTNTcuNzUyIDQwNy40NjcgOTEuODY3IDQwNy40NjdDMTEzLjY0OCA0MDcuNDY3IDEzMy41NzIgMzk1Ljg1MiAxNDQuNjIzIDM3Ny42SDE4My43NDhMMjA1LjgyNiA0MTQuMzk1QzE5OC4zNzMgNDI0Ljc4NyAxOTQuMjY2IDQzNy4yNSAxOTQuMjY2IDQ1MC4xMzNDMTk0LjI2NiA0ODQuMjQ2IDIyMi4wMiA1MTIgMjU2LjEzMyA1MTJTMzE4IDQ4NC4yNDYgMzE4IDQ1MC4xMzNDMzE4IDQzNy4yNSAzMTMuODkzIDQyNC43ODUgMzA2LjQ0MSA0MTQuMzk1TDMyOC41MTggMzc3LjZIMzY3LjY0M0MzNzguNjkzIDM5NS44NSAzOTguNjE5IDQwNy40NjcgNDIwLjQgNDA3LjQ2N0M0NTQuNTE0IDQwNy40NjcgNDgyLjI2NiAzNzkuNzEzIDQ4Mi4yNjYgMzQ1LjZTNDU0LjUxNCAyODMuNzMyIDQyMC40IDI4My43MzJaTTQyMC40IDM3NS40NjdDNDEwLjEzNyAzNzUuNDY3IDQwMC40MSAzNjkuOTMyIDM5NS4wMTYgMzYxLjAyM0wzODUuNjc2IDM0NS42SDMxMC4zOThMMzAxLjA3OCAzNjEuMTM3TDI3OS4wMDIgMzk3LjkzMkwyNjguMTg2IDQxNS45NTdMMjgwLjQzNyA0MzMuMDQzQzI4NC4wNzYgNDM4LjExNyAyODYgNDQ0LjAyNyAyODYgNDUwLjEzM0MyODYgNDY2LjYwMiAyNzIuNjAyIDQ4MCAyNTYuMTMzIDQ4MFMyMjYuMjY2IDQ2Ni42MDIgMjI2LjI2NiA0NTAuMTMzQzIyNi4yNjYgNDQ0LjAyOSAyMjguMTg5IDQzOC4xMTkgMjMxLjgzIDQzMy4wNDNMMjQ0LjA4NCA0MTUuOTU3TDIzMy4yNjYgMzk3LjkzTDIxMS4xODggMzYxLjEzNUwyMDEuODY1IDM0NS42SDEyNi41OUwxMTcuMjUgMzYxLjAyNUMxMTEuODU3IDM2OS45MzQgMTAyLjEzMSAzNzUuNDY3IDkxLjg2NyAzNzUuNDY3Qzc1LjM5OCAzNzUuNDY3IDYyIDM2Mi4wNjggNjIgMzQ1LjZDNjIgMzI5LjE0MyA3NS4zNzcgMzE1Ljc1NCA5Mi43NjYgMzE1Ljc1NEg5Mi44MDlMMTExLjc4NyAzMTYuNTMzTDEyMS41NjEgMzAwLjI0NkwxMzguMjMgMjcyLjQ2NUwxNDguMTA5IDI1NkwxMjEuNTYxIDIxMS43NTJMMTEwLjkwOCAxOTUuNDI2TDkxLjg2NyAxOTYuMjY2Qzc1LjM5OCAxOTYuMjY2IDYyIDE4Mi44NjcgNjIgMTY2LjRDNjIgMTQ5LjkzMiA3NS4zOTggMTM2LjUzMyA5MS44NjcgMTM2LjUzM0MxMDIuMTMxIDEzNi41MzMgMTExLjg1NyAxNDIuMDY2IDExNy4yNSAxNTAuOTczTDEyNi41OSAxNjYuNEgyMDEuODY1TDIxMS4xODggMTUwLjg2NUwyMzMuMjY2IDExNC4wN0wyNDQuMDg0IDk2LjA0MUwyMzEuODMyIDc4Ljk1N0MyMjguMTg5IDczLjg3OSAyMjYuMjY2IDY3Ljk2OSAyMjYuMjY2IDYxLjg2NUMyMjYuMjY2IDQ1LjM5NiAyMzkuNjY0IDMyIDI1Ni4xMzMgMzJTMjg2IDQ1LjM5NiAyODYgNjEuODY1QzI4NiA2Ny45NzEgMjg0LjA3NiA3My44ODEgMjgwLjQzOCA3OC45NTdMMjY4LjE4NiA5Ni4wNDFMMjc5LjAwMiAxMTQuMDY4TDMwMS4wNzggMTUwLjg2M0wzMTAuMzk4IDE2Ni40SDM4NS42ODJMMzk1LjAyIDE1MC45NzFDNDAwLjQxIDE0Mi4wNjQgNDEwLjEzNyAxMzYuNTMzIDQyMC40IDEzNi41MzNDNDM2Ljg2OSAxMzYuNTMzIDQ1MC4yNjYgMTQ5LjkzMiA0NTAuMjY2IDE2Ni40QzQ1MC4yNjYgMTgyLjg1NyA0MzYuODg5IDE5Ni4yNDggNDE5LjU4OCAxOTYuMjQ4SDQxOS41NTNMNDAwLjUxMiAxOTUuNDA4TDM5MC43MDUgMjExLjc1MkwzNjQuMTU2IDI1NkwzNzQuMDM1IDI3Mi40NjVMMzkwLjcwNSAzMDAuMjQ2TDQwMS40MjIgMzE2LjUxMkw0MjAuNCAzMTUuNzMyQzQzNi44NjkgMzE1LjczMiA0NTAuMjY2IDMyOS4xMzEgNDUwLjI2NiAzNDUuNlM0MzYuODY5IDM3NS40NjcgNDIwLjQgMzc1LjQ2N1pNMjU2LjEzMyAxODRDMjE2LjQzIDE4NCAxODQuMTMzIDIxNi4yOTcgMTg0LjEzMyAyNTZTMjE2LjQzIDMyOCAyNTYuMTMzIDMyOFMzMjguMTMzIDI5NS43MDMgMzI4LjEzMyAyNTZTMjk1LjgzNiAxODQgMjU2LjEzMyAxODRaTTI1Ni4xMzMgMjk2QzIzNC4wNzYgMjk2IDIxNi4xMzMgMjc4LjA1NSAyMTYuMTMzIDI1NkMyMTYuMTMzIDIzMy45NDMgMjM0LjA3NiAyMTYgMjU2LjEzMyAyMTZTMjk2LjEzMyAyMzMuOTQzIDI5Ni4xMzMgMjU2QzI5Ni4xMzMgMjc4LjA1NSAyNzguMTg5IDI5NiAyNTYuMTMzIDI5NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BadgeSheriff(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M420.4 283.732C419.652 283.732 418.9 283.75 418.145 283.781L401.475 256L418.145 228.217C418.9 228.25 419.652 228.266 420.4 228.266C454.514 228.266 482.266 200.514 482.266 166.4S454.514 104.533 420.4 104.533C398.619 104.533 378.693 116.146 367.645 134.4H328.518L306.441 97.605C313.893 87.215 318 74.75 318 61.865C318 27.752 290.246 0 256.133 0S194.266 27.752 194.266 61.865C194.266 74.75 198.375 87.215 205.826 97.605L183.748 134.4H144.623C133.572 116.148 113.648 104.533 91.867 104.533C57.752 104.533 30 132.287 30 166.4S57.752 228.266 91.867 228.266C92.613 228.266 93.365 228.25 94.121 228.217L110.791 256L94.121 283.781C93.365 283.75 92.613 283.732 91.867 283.732C57.752 283.732 30 311.486 30 345.6S57.752 407.467 91.867 407.467C113.648 407.467 133.572 395.852 144.623 377.6H183.748L205.826 414.395C198.373 424.787 194.266 437.25 194.266 450.133C194.266 484.246 222.02 512 256.133 512S318 484.246 318 450.133C318 437.25 313.893 424.785 306.441 414.395L328.518 377.6H367.643C378.693 395.85 398.619 407.467 420.4 407.467C454.514 407.467 482.266 379.713 482.266 345.6S454.514 283.732 420.4 283.732ZM420.4 375.467C410.137 375.467 400.41 369.932 395.016 361.023L385.676 345.6H310.398L301.078 361.137L279.002 397.932L268.186 415.957L280.437 433.043C284.076 438.117 286 444.027 286 450.133C286 466.602 272.602 480 256.133 480S226.266 466.602 226.266 450.133C226.266 444.029 228.189 438.119 231.83 433.043L244.084 415.957L233.266 397.93L211.188 361.135L201.865 345.6H126.59L117.25 361.025C111.857 369.934 102.131 375.467 91.867 375.467C75.398 375.467 62 362.068 62 345.6C62 329.143 75.377 315.754 92.766 315.754H92.809L111.787 316.533L121.561 300.246L138.23 272.465L148.109 256L121.561 211.752L110.908 195.426L91.867 196.266C75.398 196.266 62 182.867 62 166.4C62 149.932 75.398 136.533 91.867 136.533C102.131 136.533 111.857 142.066 117.25 150.973L126.59 166.4H201.865L211.188 150.865L233.266 114.07L244.084 96.041L231.832 78.957C228.189 73.879 226.266 67.969 226.266 61.865C226.266 45.396 239.664 32 256.133 32S286 45.396 286 61.865C286 67.971 284.076 73.881 280.438 78.957L268.186 96.041L279.002 114.068L301.078 150.863L310.398 166.4H385.682L395.02 150.971C400.41 142.064 410.137 136.533 420.4 136.533C436.869 136.533 450.266 149.932 450.266 166.4C450.266 182.857 436.889 196.248 419.588 196.248H419.553L400.512 195.408L390.705 211.752L364.156 256L374.035 272.465L390.705 300.246L401.422 316.512L420.4 315.732C436.869 315.732 450.266 329.131 450.266 345.6S436.869 375.467 420.4 375.467ZM256.133 184C216.43 184 184.133 216.297 184.133 256S216.43 328 256.133 328S328.133 295.703 328.133 256S295.836 184 256.133 184ZM256.133 296C234.076 296 216.133 278.055 216.133 256C216.133 233.943 234.076 216 256.133 216S296.133 233.943 296.133 256C296.133 278.055 278.189 296 256.133 296Z" />
        </Icon>
    </>
}