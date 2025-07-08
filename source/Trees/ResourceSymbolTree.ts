import SymbolTreeNode from '../Entities/SymbolTreeNode';

export default class ResourceSymbolTree
{
	constructor ()
	{
		this.orphanNodeMap = {};
	}

	insertNode (node:SymbolTreeNode)
	{
		let nodeName = node.symbol.name;
		console.log(`Inserting node ${nodeName}.`);

		if (this.root == undefined)
		{
			console.log(`${nodeName} becomes root.`);
			this.root = node;
		}
		else
		{
			let rootParentNode = this.getParentNodeWithChildNameFromRoot(nodeName);

			if (rootParentNode != undefined)
				this.linkChildToParent(node, rootParentNode);
			else
			{
				console.log(`${nodeName} has no root parents.`);

				let orphanParentNode = this.getParentNodeWithChildNameFromOrphans(nodeName);

				if (orphanParentNode != undefined)
				{
					this.linkChildToParent(node, orphanParentNode);
				}
				else
				{
					console.log(`${nodeName} has no orphan parents.`);
					this.orphanNodeMap[nodeName] = node;
				}

				this.reconcileRootWithOrphans();
			}
		}
	}

	linkChildToParent (childNode:SymbolTreeNode, parentNode:SymbolTreeNode)
	{
		console.log(`Linking ${childNode.symbol.name} to ${parentNode.symbol.name}.`);
		childNode.parentNode = parentNode;
		//parentNode.childNodes.push(childNode);
	}

	getParentNodeWithChildName (childNodeName:string) : SymbolTreeNode | undefined
	{

		let parentNode = this.getParentNodeWithChildNameFromRoot(childNodeName);
		return parentNode != undefined ? parentNode : this.getParentNodeWithChildNameFromOrphans(childNodeName);
	}

	getParentNodeWithChildNameFromRoot (childNodeName:string) : SymbolTreeNode | undefined
	{
		return this.root.getParentNodeWithChildName(childNodeName);
	}

	getParentNodeWithChildNameFromOrphans (childNodeName:string) : SymbolTreeNode | undefined
	{
		let orphanNodeList = Object.values(this.orphanNodeMap);

		for (let i = 0; i < orphanNodeList.length; i++)
		{
			let orphanNode = orphanNodeList[i];
			let parentNode = orphanNode.getParentNodeWithChildName(childNodeName);
			if (parentNode != undefined)
			{
				console.log(`Found parent node ${parentNode.symbol.name} for child ${childNodeName}.`);
				return parentNode;
			}
		}

		console.log(`Could not find a parent for child name ${childNodeName}.`);
		return undefined;
	}

	reconcileRootWithOrphans ()
	{
		if (this.root == undefined)
			return;

		let parentNode = this.getParentNodeWithChildNameFromOrphans(this.root.symbol.name);

		console.log(`${this.root.symbol.name} has no parents.`);

		if (parentNode != undefined)
		{
			this.root.parentNode = parentNode;
			this.root = parentNode.getRoot();
			this.removeOrphanNode(this.root);
		}
	}

	removeOrphanNode (node:SymbolTreeNode)
	{
		delete this.orphanNodeMap[node.symbol.name];
	}

	orphanNodeMap:{[x:string]:SymbolTreeNode|undefined};
	root:SymbolTreeNode|undefined;
}
