import React from 'react'
import MindMap from '../../react-mindmap'
// import MindMap from 'react-mindmap'
//
import { nodes, subnodes, connections } from '../../data/sample.json'

export function Map() {
  return(
    <MindMap
      connections={connections}
      nodes={nodes}
      subnodes={subnodes}
      editable={false}
    />
  );
}
