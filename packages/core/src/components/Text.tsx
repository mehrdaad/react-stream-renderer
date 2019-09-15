import React from 'react';
import Paragraph from '../host/nodes/Paragraph';
import { TextTransform, OnLayoutHook, OnClickHook } from '../types';

type SingleOrMulti<T> = T | Array<T>;

export type Props = {
  children: SingleOrMulti<number | string | JSX.Element>;
  color?: string;
  bgColor?: string;
  textTransform?: TextTransform;
  dim?: boolean;
  underline?: boolean;
  lineThrough?: boolean;
  bold?: boolean;
  italic?: boolean;
  onLayout?: OnLayoutHook;
  onClick?: OnClickHook;
};

export default function View(props: Props) {
  return (
    // @ts-ignore
    <Paragraph.TAG
      onLayout={props.onLayout}
      onClick={props.onClick}
      style={{
        color: props.color,
        bgColor: props.bgColor,
        modifiers: reduceModifiers(props),
        textTransform: props.textTransform,
      }}
    >
      {props.children}
    </Paragraph.TAG>
  );
}

function reduceModifiers(props: Props) {
  const modifiers = [];
  if (props.bold) {
    modifiers.push('bold');
  }
  if (props.italic) {
    modifiers.push('italic');
  }
  if (props.dim) {
    modifiers.push('dim');
  }
  if (props.underline) {
    modifiers.push('underline');
  }
  if (props.lineThrough) {
    modifiers.push('strikethrough');
  }
  return modifiers.length ? modifiers : undefined;
}
