---
layout: post
title: "Magento template to list subtags"
date: 2012-07-12 22:00
description: Magento template to list subtags
keywords: Magento, category, tags, list
tags: Magento
published: false
---

{% highlight php%}
<?php 
$cat_id = $this->getData(category_id)
$collection = Mage::getModel('catalog/category')->gettags($cat_id);
$helper     = Mage::helper('catalog/category');
?>

<ul>
	<?php foreach ($collection as $cat):?>
	  <?php if($cat->getIsActive()):?>
	    <?php 
	    $cur_category = Mage::getModel('catalog/category')->load($cat->getId());
	    ?>
	    <li>
	      <a href="<?php echo $helper->getCategoryUrl($cat);?>">
	        <?php echo $cat->getName();?>
	      </a>
	    </li>
	  <?php endif?>
	<?php endforeach;?>
</ul>
{% endhighlight %}

{% highlight %}
{{block type="catalog/navigation" category_id="5" template="catalog/navigation/categorylist.phtml"}}
{% endhighlight %}