Open sourcing the IntelliJ Platform and IntelliJ IDEA Community Edition has provoked multiple questions related to the open source concept in general and the JetBrains approach in particular.

We've summarized these questions and grouped them by topic, to help you better understand this new development and its subsequent benefits.

If your personal question is not answered here, please feel free to share it in our [forum](http://jetbrains.net/devnet/community/idea/ideacommunity?view=discussions).

#### IntelliJ IDEA Community Edition FAQ

###### Why has JetBrains decided to open source the IntelliJ Platform and IntelliJ IDEA Community Edition?

The answer is simple: we want to significantly grow the number of users of IntelliJ IDEA. Many people know this IDE is great but have not been able to use it because of the cost.

The second reason is that we want to see the growth of the ecosystem around IntelliJ IDEA. The availability of the source code and the growth of the user base will make it easier and much more attractive to build more integrations for third-party libraries and tools.

And finally, the increased level of community participation, in the form of both feedback and code contributions, will help increase the quality of both the open source and commercial products.

###### What do you think about competition?

We view competition as a very good and healthy thing. We want to create stronger competition for the other open source IDEs in the market.

In fact, with this recent change in licensing, all competitors are now nearly on the same playing field. And this is great for users!

###### Which parts of IntelliJ IDEA are available as open source?

The IntelliJ Platform has been open-sourced completely. The IntelliJ Platform is an IDE platform which provides underlying APIs for all JetBrains IDEs: IntelliJ IDEA, RubyMine, PhpStorm, WebStorm, PyCharm, AppCode, and MPS.

As for IntelliJ IDEA itself, only selected parts have been open sourced. For a complete list of features available in the Community Edition, see the [comparison matrix](http://www.jetbrains.org/display/IJOS/Ultimate+Edition+vs.+Community+Edition) for the 2 IntelliJ IDEA editions.

Basically, the main items missing in Community Edition are detailed web and enterprise support features.

Please note that some plug-ins for IntelliJ IDEA Ultimate are also available as open source and will be functional in the Community Edition. Please check individual plug-ins for details.

###### What license is used for the IntelliJ Platform and IntelliJ IDEA Community Edition, and why was this license chosen?

The Apache 2.0 license was chosen for both the IntelliJ Platform and IntelliJ IDEA Community Edition. For the full text of the license see: [http://www.apache.org/licenses/LICENSE-2.0.html](http://www.apache.org/licenses/LICENSE-2.0.html)

We chose the Apache 2.0 license because it is a very open license which lets anyone create both open source and commercial products on top of our platform. The Apache 2.0 license allows developers to mix our code with their code under basically any license, which gives developers great flexibility in how they reuse our code. This enables JetBrains to spread the usage of our platform as well as increase the number of people knowledgeable about IntelliJ APIs.

NOTE: the Apache 2.0 license covers all files in the distribution including the icons and other graphics.

###### How will existing customers benefit from open-sourcing the IntelliJ platform and IDEA Community Edition?

Existing customers will benefit greatly from the open source project:

- Wider user base means more plug-ins and more features developed by the community and available for all
- Better quality thanks to community testing and regular quality assurance by JetBrains
- More and earlier community feedback leading to better implementation of features
- More available documentation thanks to community contributions
- More languages and frameworks supported on top of the platform thanks to community contributions
- As more people learn and use the platform and the IDE, it will become easier to find people with a good knowledge of IntelliJ IDEA (both for hiring and for consulting)

For our customers, we see it as a win-win situation. We're not changing the way we build IDEA, so the quality and the number of features will only improve.

###### What is the pricing for IntelliJ IDEA Ultimate Edition?

To learn about different pricing options (including free licenses for open source projects), please visit the [Licensing/Upgrade page](http://www.jetbrains.com/idea/buy/index.jsp) of the official JetBrains website.

###### Is there a book about IntelliJ IDEA?

There's an old book about IntelliJ IDEA 4 and 5. Although the feature set has evolved quite a bit, the concepts are still the same, so you can still benefit from reading this book. Please see: [http://www.manning.com/fields3](http://www.manning.com/fields3)

A new book about IntelliJ IDEA is currently under negotiation with the editor, so stay tuned.

###### Is it possible to use third-party plug-ins in IntelliJ IDEA Community Edition?

The plug-in architectures and APIs are the same for the Community Edition and the Ultimate Edition. Compatibility will depend on the dependencies of the plug-in you want to install. Plug-ins that rely on functionality not available in the Community Edition (for example, JavaScript, CSS or Java EE) will only run on IntelliJ IDEA Ultimate.

###### Can I take plugins from the IntelliJ IDEA Ultimate distribution and install them in IntelliJ IDEA Community Edition?

No. They will not work.

###### How do I get involved?

See the [How to Contribute](http://www.jetbrains.org/display/IJOS/Contribute) section of this site.

###### How much code is currently being developed by JetBrains employees and how much by the community?

Even before going open-source, IntelliJ IDEA had a lot of community contributions. Many features of IntelliJ IDEA began their life as open-source third-party plug-ins, and some of their authors kept working on them after they were bundled into IntelliJ IDEA.

As for the core code, almost all of it is being developed by JetBrains employees, and we don't expect that to change in the near future. However, as community members continuously gain trust based on their high-quality contributions, they can gain committer status and get more influence over their respective area of contributions. Thus, we expect community participation to grow over time.

###### How do I get the IntelliJ IDEA Community Edition sources?

The source files of the Community Edition reside in the public git repository. To get access to the code, please follow the provided[instructions](http://www.jetbrains.org/pages/viewpage.action?pageId=983225).

#### IntelliJ Platform FAQ

###### What is the IntelliJ Platform?

The IntelliJ Platform is a platform for building IDEs, currently used as the foundation for IntelliJ IDEA, RubyMine, PyCharm, WebStorm, PhpStorm, AppCode, MPS and other products currently in development at JetBrains.

The platform provides a comprehensive set of tools for building IDEs, including:

- virtual file system
- UI framework (action system, toolwindows, etc.)
- text editor
- lexing, parsing, abstract syntax trees and other language-specific infrastructure
- frameworks for implementing navigation, code completion, inspections, intentions, refactorings, etc.
- version control integration
- debugger framework
- graphical unit test runner

All of this functionality is not tied to any particular programming language.

###### Is the IntelliJ Platform a general-purpose platform, suitable for building any desktop applications, similar to Eclipse RCP and the NetBeans Platform?

The IntelliJ Platform is great for building IDEs and other tools geared for developers. It is not, however, a general-purpose platform. We don't recommend building general-purpose desktop applications on top of the platform, since a lot of IDE-related concepts are still present in the platform itself.

###### Can I build a commercial product on top of the IntelliJ Platform?

Yes, you can, according to the terms of the Apache 2 license. We encourage developers to build both open source and commercial products on top of the platform.

###### Does the IntelliJ Platform require me to use a specific user interface toolkit?

Yes, the IntelliJ Platform is built on Swing, so your application based on the IntelliJ Platform will be Swing-based as well.

###### Are there any plans to open-source other JetBrains products?

This definitely is not among our nearest plans. For now, we are going to keep building new affordable products on our platform - and time will show how the situation evolves in the IDE market.