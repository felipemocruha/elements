import { INodeEdge } from '../../../types';

export const edges: INodeEdge[] = [
  {
    id: 1,
    depth: 3,
    type: 'ref',
    fromBranchNodeId: 9715,
    fromBranchNodeName: 'Pet',
    fromBranchNodeType: 'model',
    fromBranchNodeUri: '/reference/petstore/models/pet.v1.yaml',
    fromBranchNodePath: '#/properties/category',
    toBranchNodeId: 9714,
    toBranchNodeName: 'Category',
    toBranchNodeType: 'model',
    toBranchNodeUri: '/reference/petstore/models/category.v1.yaml',
    toBranchNodePath: '#/',
  },
  {
    id: 4,
    depth: 1,
    type: 'parent',
    fromBranchNodeId: 9720,
    fromBranchNodeName: 'Swagger Petstore',
    fromBranchNodeType: 'http_service',
    fromBranchNodeUri: '/reference/petstore/openapi.v1.yaml',
    fromBranchNodePath: '#/paths/~1pets/get',
    toBranchNodeId: 9722,
    toBranchNodeName: 'List all pets',
    toBranchNodeType: 'http_operation',
    toBranchNodeUri: '/reference/petstore/openapi.v1.yaml/paths/~1pets/get',
    toBranchNodePath: '#/',
  },
  {
    id: 5,
    depth: 2,
    type: 'ref',
    fromBranchNodeId: 9722,
    fromBranchNodeName: 'List all pets',
    fromBranchNodeType: 'http_operation',
    fromBranchNodeUri: '/reference/petstore/openapi.v1.yaml/paths/~1pets/get',
    fromBranchNodePath: '#/responses/200/content/application~01json/schema',
    toBranchNodeId: 9716,
    toBranchNodeName: 'Pets',
    toBranchNodeType: 'model',
    toBranchNodeUri: '/reference/petstore/openapi.v1.yaml/components/schemas/Pets',
    toBranchNodePath: '#/',
  },
  {
    id: 6,
    depth: 2,
    type: 'ref',
    fromBranchNodeId: 9722,
    fromBranchNodeName: 'List all pets',
    fromBranchNodeType: 'http_operation',
    fromBranchNodeUri: '/reference/petstore/openapi.v1.yaml/paths/~1pets/get',
    fromBranchNodePath: '#/responses/default/content/application~01json/schema',
    toBranchNodeId: 9713,
    toBranchNodeName: 'Error',
    toBranchNodeType: 'model',
    toBranchNodeUri: '/reference/common/models/error.v1.yaml',
    toBranchNodePath: '#/',
  },
  {
    id: 7,
    depth: 1,
    type: 'parent',
    fromBranchNodeId: 9720,
    fromBranchNodeName: 'Swagger Petstore',
    fromBranchNodeType: 'http_service',
    fromBranchNodeUri: '/reference/petstore/openapi.v1.yaml',
    fromBranchNodePath: '#/paths/~1pets/post',
    toBranchNodeId: 9723,
    toBranchNodeName: 'Create a pet',
    toBranchNodeType: 'http_operation',
    toBranchNodeUri: '/reference/petstore/openapi.v1.yaml/paths/~1pets/post',
    toBranchNodePath: '#/',
  },
  {
    id: 8,
    depth: 2,
    type: 'ref',
    fromBranchNodeId: 9723,
    fromBranchNodeName: 'Create a pet',
    fromBranchNodeType: 'http_operation',
    fromBranchNodeUri: '/reference/petstore/openapi.v1.yaml/paths/~1pets/post',
    fromBranchNodePath: '#/responses/default/content/application~01json/schema',
    toBranchNodeId: 9713,
    toBranchNodeName: 'Error',
    toBranchNodeType: 'model',
    toBranchNodeUri: '/reference/common/models/error.v1.yaml',
    toBranchNodePath: '#/',
  },
  {
    id: 9,
    depth: 1,
    type: 'parent',
    fromBranchNodeId: 9720,
    fromBranchNodeName: 'Swagger Petstore',
    fromBranchNodeType: 'http_service',
    fromBranchNodeUri: '/reference/petstore/openapi.v1.yaml',
    fromBranchNodePath: '#/paths/~1pets~1{petId}/get',
    toBranchNodeId: 9724,
    toBranchNodeName: 'Info for a specific pet',
    toBranchNodeType: 'http_operation',
    toBranchNodeUri: '/reference/petstore/openapi.v1.yaml/paths/~1pets~1{petId}/get',
    toBranchNodePath: '#/',
  },
  {
    id: 10,
    depth: 2,
    type: 'ref',
    fromBranchNodeId: 9724,
    fromBranchNodeName: 'Info for a specific pet',
    fromBranchNodeType: 'http_operation',
    fromBranchNodeUri: '/reference/petstore/openapi.v1.yaml/paths/~1pets~1{petId}/get',
    fromBranchNodePath: '#/responses/200/content/application~01json/schema',
    toBranchNodeId: 9715,
    toBranchNodeName: 'Pet',
    toBranchNodeType: 'model',
    toBranchNodeUri: '/reference/petstore/models/pet.v1.yaml',
    toBranchNodePath: '#/',
  },
  {
    id: 11,
    depth: 2,
    type: 'ref',
    fromBranchNodeId: 9724,
    fromBranchNodeName: 'Info for a specific pet',
    fromBranchNodeType: 'http_operation',
    fromBranchNodeUri: '/reference/petstore/openapi.v1.yaml/paths/~1pets~1{petId}/get',
    fromBranchNodePath: '#/responses/default/content/application~01json/schema',
    toBranchNodeId: 9713,
    toBranchNodeName: 'Error',
    toBranchNodeType: 'model',
    toBranchNodeUri: '/reference/common/models/error.v1.yaml',
    toBranchNodePath: '#/',
  },
  {
    id: 12,
    depth: 1,
    type: 'parent',
    fromBranchNodeId: 9720,
    fromBranchNodeName: 'Swagger Petstore',
    fromBranchNodeType: 'http_service',
    fromBranchNodeUri: '/reference/petstore/openapi.v1.yaml',
    fromBranchNodePath: '#/components/schemas/Pets',
    toBranchNodeId: 9716,
    toBranchNodeName: 'Pets',
    toBranchNodeType: 'model',
    toBranchNodeUri: '/reference/petstore/openapi.v1.yaml/components/schemas/Pets',
    toBranchNodePath: '#/',
  },
  {
    id: 13,
    depth: 2,
    type: 'ref',
    fromBranchNodeId: 9716,
    fromBranchNodeName: 'Pets',
    fromBranchNodeType: 'model',
    fromBranchNodeUri: '/reference/petstore/openapi.v1.yaml/components/schemas/Pets',
    fromBranchNodePath: '#/items',
    toBranchNodeId: 9715,
    toBranchNodeName: 'Pet',
    toBranchNodeType: 'model',
    toBranchNodeUri: '/reference/petstore/models/pet.v1.yaml',
    toBranchNodePath: '#/',
  },
];
