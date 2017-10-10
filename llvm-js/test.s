	.section	__TEXT,__text,regular,pure_instructions
	.macosx_version_min 10, 12
	.globl	_main                   ## -- Begin function main
	.p2align	4, 0x90
_main:                                  ## @main
	.cfi_startproc
## BB#0:
	movl	$42, -4(%rsp)
	movl	$23, %eax
	retq
	.cfi_endproc
                                        ## -- End function

.subsections_via_symbols
