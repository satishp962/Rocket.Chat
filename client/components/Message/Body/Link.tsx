import { Link as ASTLink } from '@rocket.chat/message-parser';
import React, { FC } from 'react';

import Bold from './Bold';
import Italic from './Italic';
import Strike from './Strike';

const fn = (block: ASTLink['value']['label']) => {
	switch (block.type) {
		case 'PLAIN_TEXT':
			return block.value;
		case 'STRIKE':
			return <Strike value={block.value} />;
		case 'ITALIC':
			return <Italic value={block.value} />;
		case 'BOLD':
			return <Bold value={block.value} />;
		default:
			return null;
	}
};
const Link: FC<{ value: ASTLink['value'] }> = ({ value }) => {
	const { src, label } = value;

	return <a href={src.value}>{fn(label)}</a>;
};

export default Link;
